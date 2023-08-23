import React from 'react'
import Category from './Category'
import DishesOrder from './dishesOrder/DishesOrder'
import ColdFoods from './foods/coldFood/ColdFoods'
import { MdArrowBackIos } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'

export default function CardProduct() {
  const params = useParams()
  console.log(params.id);
  return (
    <div className='bg-[#403C3B]'>
      <Category />
      <div className='w-[100%]'>
        <div>
            <Link to="/">
          <div className='flex text-white gap-2 py-8 pl-8'>
            <button className='bg-green-400 rounded-full p-1 '><MdArrowBackIos className='text-white' /> </button>
            <p>Вернуться назад</p>
          </div>
            </Link>
            
          <div className='rounded-xl flex '>
            <div>
              {
                
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
          >
            <div className="h-9 w-1 bg-green-400"></div>
            <h1 className="text-white font-bold">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h1>
          </div>
          <ColdFoods />
        </div>
      </div>
      <DishesOrder />
     
    </div>
  )
}
