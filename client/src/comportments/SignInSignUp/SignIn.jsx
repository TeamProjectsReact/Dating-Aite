import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const headleBack = () => {
        window.location.reload()
    }

    const [SignINData, SetSignINData] = useState({
        email: '',
        password: ''
    })

    const headleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:8081/SignIn', SignINData)
            
            const loginToken = res.data.Token;

            //store token in localstorage
            localStorage.setItem('LoginToken', loginToken)
            
            // //get and store login user role and email
            // const userRole = res.data.LoginUser[0].role;
            // const userEmail = res.data.LoginUser[0].email;

            // //store data in localstore so that use secureLocalStorage
            // secureLocalStorage.setItem("Login1", userRole);
            // secureLocalStorage.setItem("login2", userEmail);

            //login to system

            if(res.data.Msg === "Success"){
                if(res.data.LoginUser[0].is_active === 0 && res.data.LoginUser[0].is_lock === 1){
                    alert('Your Account has been locked. Unauthorized activity has been detected.')
                    localStorage.clear()
                    navigate('/')
                }
                else if(res.data.LoginUser[0].is_active === 0){
                    alert('Your Account has been Deactive by Administration.')
                    localStorage.clear()
                    navigate('/')
                }
                else{
                    //get and store login user role and email
                    const userRole = res.data.LoginUser[0].Role;
                    const userEmail = res.data.LoginUser[0].Email;

                    //store data in localstore so that use secureLocalStorage
                    secureLocalStorage.setItem("Login1", userRole);
                    secureLocalStorage.setItem("login2", userEmail);
                    navigate('/Dashboard');
                }
            }
            else{
                alert(res.data.Error)
            }

        }        
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <div className="my-20 py-16 px-12 rounded-xl bg-white">
            <span onClick={headleBack} className="text-pink-500 cursor-pointer duration-500 hover:ml-2">Back to Home</span>
            <h1 className="love-title text-pink-500 text-center text-2xl my-2">Welcome Back </h1>
            <form onSubmit={headleSubmit}>
                <div className="my-4">
                    <label htmlFor="" className='text-pink-500 my-2'>Email : </label>
                    <input type="email" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Email'
                    onChange={e => SetSignINData({...SignINData, email:e.target.value})}/>
                </div>
                <div className="m-4y">
                    <label htmlFor="" className='text-pink-500 my-2'>Password : </label>
                    <input type="password" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Password' 
                    onChange={e => SetSignINData({...SignINData, password:e.target.value})}/>
                </div>
                <div className="my-6">
                    <button type='submit' className='text-white font-semibold bg-pink-500 rounded py-2 px-8 w-full duration-500 hover:bg-pink-600'>Sign In</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn