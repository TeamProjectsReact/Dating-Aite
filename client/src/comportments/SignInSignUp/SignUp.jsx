import React from 'react'

const SignUp = () => {
    const headleBack = () => {
        window.location.reload()
    }

  return (
    <div>
        <div className="my-20 py-16 px-12 rounded-xl bg-white">
            <span onClick={headleBack} className="text-pink-500 cursor-pointer duration-500 hover:ml-2">Back to Home</span>
            <h1 className="love-title text-pink-500 text-center text-2xl my-2">Create New Account ?</h1>
            <form>
                <div className="my-4">
                    <label htmlFor="" className='text-pink-500 my-2'>Username : </label>
                    <input type="text" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Username' />
                </div>
                <div className="my-4">
                    <label htmlFor="" className='text-pink-500 my-2'>Email : </label>
                    <input type="email" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Email' />
                </div>
                <div className="m-4y">
                    <label htmlFor="" className='text-pink-500 my-2'>Password : </label>
                    <input type="password" name="" id="" className="pl-2 w-full h-12 border border-pink-500 rounded text-pink-500" required placeholder='Enter Password' />
                </div>
                <div className="my-6">
                    <button className='text-white font-semibold bg-pink-500 rounded py-2 px-8 w-full duration-500 hover:bg-pink-600'>Create Account</button>
                </div>
            </form>
          </div>
    </div>
  )
}

export default SignUp