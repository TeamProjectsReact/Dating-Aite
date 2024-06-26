import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {
    const headleBack = () => {
        window.location.reload()
    }

     const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
     })

     const headleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/SignUp', SignUpData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Registation Successful")
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        })
     }

  return (
    <div>
        <div className="my-20 py-16 px-12 rounded-xl bg-white">
            <span onClick={headleBack} className="text-pink-500 cursor-pointer duration-500 hover:ml-2">Back to Home</span>
            <h1 className="love-title text-pink-500 text-center text-2xl my-2">Create New Account ?</h1>
            <form onSubmit={headleSubmit}>
                <div className="my-4">
                    <label htmlFor="" className='text-pink-500 my-2'>Username : </label>
                    <input type="text" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Username' 
                    onChange={e => SetSignUpData({...SignUpData, username:e.target.value})}/>
                </div>
                <div className="my-4">
                    <label htmlFor="" className='text-pink-500 my-2'>Email : </label>
                    <input type="email" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Email' 
                    onChange={e => SetSignUpData({...SignUpData, email:e.target.value})}/>
                </div>
                <div className="m-4y">
                    <label htmlFor="" className='text-pink-500 my-2'>Password : </label>
                    <input type="password" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Password' 
                    onChange={e => SetSignUpData({...SignUpData, password:e.target.value})}/>
                </div>
                <div className="my-6">
                    <button type='submit' className='text-white font-semibold bg-pink-500 rounded py-2 px-8 w-full duration-500 hover:bg-pink-600'>Create Account</button>
                </div>
            </form>
          </div>
    </div>
  )
}

export default SignUp