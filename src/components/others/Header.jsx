import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'
const Header = (props) => {
 
  // const [userName,setUserName] = useState('')
  // if(!data){
  //   setUserName('Admin')

  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = ()=>{
localStorage.setItem('loggedInUser','')
// console.log(props.changeUser)
props.changeUser('')
// window.location.reload()
  }
 
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl hover:font-extrabold font-medium'>Hello <br></br> <span className='text-3xl font-semibold hover:font-black'>userName👋🏻</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-900 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
