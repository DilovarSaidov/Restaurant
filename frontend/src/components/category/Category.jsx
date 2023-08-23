import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <div className="flex justify-evenly w-[100%] h-[10vh] items-center bg-[#403C3B] border-b-2 border-gray-600 ">
      <Link to='coldFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Холодные закуски</button>
      </Link>
      <Link to='hotFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Горячие закуски</button>
      </Link>
      <Link to='meatFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Мясные блюда</button>
      </Link>
      <Link to='soup'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Супы</button>
      </Link>
      <Link to='fish'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Рыбные блюда</button>
      </Link>
      <Link to='grill'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Гриль меню</button>
      </Link>
      <Link to='dish'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Фирменные блюда</button>
      </Link>
      <Link to='drink'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Напитки</button>
      </Link>
    </div>
  )
}
