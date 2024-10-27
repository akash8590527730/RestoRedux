import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchFood } from '../redux/slices/foodSlice'


const Header = () => {
  const dispatch = useDispatch()
  return (
  
   <nav className='flex bg-yellow-500 fixed w-full p-5'>
      <Link className='text-white font-bold text-2xl' to={'/'}> <i className="fa-solid fa-truck-fast me-1"></i> Resto Web</Link>
      <ul className='flex-1
      text-right'>
      <li  className='list-none inline-block px-5'><input onChange={e=>dispatch(searchFood(e.target.value.toLowerCase()))} className='rounded p-1 '  style={{width:'300px'}} type="text" placeholder='Search Foods Here' /></li>
 
      </ul>
    </nav>    
  )
}

export default Header
