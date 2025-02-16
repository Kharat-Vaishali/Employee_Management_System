import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email,setEmail] = useState(" ");
const [password,setPassword] = useState(" ");

const submitHandler = (e)=>{
  e.preventDefault()


 handleLogin(email,password)

  setEmail("")
  setPassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center '>
            <input
            value = {email}
             onChange={(e)=>{
              setEmail(e.target.value)
             }}
             required
             className='border-2 border-emerald-600 py-3 px-5 text-xl  outline-none bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email'
             />
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
             required
              className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Your Password'
              />
            <button className= ' border-2 border-emerald-600 py3  px-5  text-xl  text-white outline-none bg-emerald-500 hover:bg-emerald-900 rounded-full mt-3 '>Login</button>
           
        </form>
      </div>
    </div>
  )
}

export default Login;
