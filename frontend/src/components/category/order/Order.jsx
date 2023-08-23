import React from 'react'
import Category from '../Category'
import { MdArrowBackIos } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import { Link } from 'react-router-dom'


export default function Order() {
  return (
    <div className='bg-[#403C3B]'>
      <Category />
      <div className='px-[25%] text-white'>
        <Link to=''>
          <div className='flex text-white gap-2 py-8 pl-8'>
            <button className=' p-1 '><MdArrowBackIos className='text-white' /> </button>
            <p>в корзину</p>
          </div>
        </Link>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white font-bold">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>1. Контактная информация</p>
          <div className='flex gap-5'>
            <input type="text" placeholder='Имя' className='bg-transparent border-2 border-gray-600 w-[40%] p-2' />
            <input type="number" placeholder='Телефон*' className='bg-transparent border-2 border-gray-600 w-[40%] p-2' />
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>2. Доставка</p>
          <div className='flex gap-10'>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>Доставка</button>
            <div className='flex gap-3 items-center'>
              <button><BiTime /></button>
              <p>Доставим через  1 час 30 минут</p>
            </div>
          </div>
          <p className='p-2 font-bold'>Адрес доставки</p>
          <div className='flex flex-wrap gap-4'>
            <input type="text" placeholder='Укажите улицу*' className='bg-transparent border-2 border-gray-600 w-[40%] p-2' />
            <input type="number" placeholder='Номер дома**' className='bg-transparent border-2 border-gray-600 w-[40%] p-2' />
            <input type="number" placeholder='№ квартиры/офиса' className='bg-transparent border-2 border-gray-600 w-[40%] p-2' />
            <input type="number" placeholder='Подъезд' className='bg-transparent border-2 border-gray-600 w-[20%] p-2' />
            <input type="number" placeholder='Этаж' className='bg-transparent border-2 border-gray-600 w-[20%] p-2' />
            <input type="text" placeholder='Комментарий' className='bg-transparent border-2 border-gray-600 w-[80%] p-2' />
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>3. Оплатить</p>
          <div className='flex gap-5'>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>Оплата онлайн</button>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>Курьеру картой</button>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>Наличными</button>
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>4. Когда доставить</p>
          <div className='flex gap-5'>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>В ближайшее время</button>
            <button className='bg-transparent border-2 border-green-400 p-2 rounded-xl'>Ко времени</button>
            <input type="time" placeholder='Укажите время' className='bg-transparent border-2 border-gray-600 w-[10%] p-2' />
          </div>
          <div className='p-2'>
            <p className='p-2 font-bold'>Хотите мы позвоним?</p>
            <div className='flex gap-5'>
              <input type='radio' name='call' />
              <p>Не перезванивать</p>
            </div>
            <div className='flex gap-5'>
              <input type='radio' name='call' />
              <p>Потребуется звонок оператора</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 flex  justify-between rounded-xl'>
          <div className='flex gap-3 items-center'>
            <input type="checkbox" />
            <p className='flex gap-2'>Я согласен на обработку моих перс. данных в соответствии с <Link to='Conditions'> <p className='text-green-400 hover:text-white'>Условиями</p></Link> </p>
          </div>
          <div>
            <button className='bg-green-400 p-2 rounded-xl'>Оформить заказ</button>
          </div>
        </div>

      </div>
    </div>
  )
}

