import React from 'react'
import Category from '../Category'
import DishesOrder from '../dishesOrder/DishesOrder'
import Product from './Product'



export default function Stock({ stock }) {
  return (
    <div className='bg-[#403C3B]'>
      <Category />
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white font-bold">АКЦИИ</h1>
        </div>
        <div>
         <Product/>
        </div>
      </div>
      <DishesOrder />
    </div>
  )
}
