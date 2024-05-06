const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const path = require('path')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');


const app = express();
const PORT = process.env.PORT || 8081

//file  upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    }, 
    filename:(req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({
    storage:storage
})


//make connection between dbsever and node app

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_dating"
})
//email Sending - Nodemailer transporter

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
});


// middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 

// all end pints start

app.post('/SignUp', (req, res) => {
  // console.log(req.body)

  const checkSql = "SELECT * FROM users WHERE Email = ?"
  connection.query(checkSql, [req.body.email], (err, result) => {
    if(err) throw err

    if(result.length === 0){
      bcrypt.hash(req.body.password, 10, (err, HashPass) => {
        if(err) throw err

        if(HashPass){
          const sql = "INSERT INTO users(Username, Email, Password, Role, join_at, is_active, is_lock) VALUES (?)"
          const userRole = "user"
          const is_active = 1
          const is_lock = 0
          const join_at = new Date()
          
          const values = [
            req.body.username,
            req.body.email,
            HashPass,
            userRole,
            join_at,
            is_active,
            is_lock
          ]

          connection.query(sql, [values], (err, result) => {
            if(err){
              return res.json({Error: "Internal Server ERROR"})
            }
            else{
              return res.json({Status: "Success"})
            }
          })
        }
      })
    }
    else{
      res.json({Error: "User Alredy in Database"})
    }
  })

})

// SignIn endpoint

app.post('/SignIn', (req, res) => {
  const userSql = "SELECT * FROM users WHERE Email = ?"
  connection.query(userSql, [req.body.email], (err, result) => {
    if(err) throw err

    if(result.length === 0){
      return res.json({Error: "User Not Found"})
    }
    else{
      const password = req.body.password;
      bcrypt.compare(password, result[0].Password, (err, PassMatch) => {
        if(err) throw err

        if(PassMatch) {
          //generate JWT Token
          
          const token = jwt.sign(
              {email: result[0].email, role: result[0].role, is_active: result[0].is_active, is_lock: result[0].is_lock},
              'your-secret-key',
              {expiresIn: '1h'}
          );
          res.json({Token: token, Msg: "Success", LoginUser:result})
          console.log(result)
        }
        else{
          return res.json({Error: "Password not Match"})
        }
      })
    }
  })
})


// all end points end

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));