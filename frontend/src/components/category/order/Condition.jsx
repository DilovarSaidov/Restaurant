import React from 'react'
import foto from '../../../assets/map1.png'
import Category from '../Category'
import Accordions from './Accordions'

export default function Condition() {
    return (
        <div>
            <Category />
            <div>
                <div className='bg-[#484545]'>
                    <div className='flex items-center pl-8 py-8  text-4xl gap-5'>
                        <div className='h-9 w-1 bg-green-400'></div>
                        <h1 className='text-white'>УСЛОВИЯ ДОСТАВКИ</h1>
                    </div>
                    <div className='flex flex-wrap w-[100%] m-auto justify-evenly p-4'>
                        <div className='w-[55%]'>
                            <Accordions />
                        </div>
                        <div className='w-[33%]'>
                            <img src={foto} className='w-[100%] h-[52vh]' alt="" />
                        </div>
                    </div>
                    <div className='flex gap-5 pl-24'>
                        <div>
                            <p className='font-bold text-white'>График работы доставки:</p>
                            <p className='text-white'>с 10:00-21:00</p>
                        </div>
                        <div>
                            <p className='font-bold text-white'>График работы кафе:</p>
                            <p className='text-white'>с 08:00-21:00</p>
                        </div>
                    </div>
                    <div className='p-8 pl-24'>
                        <p className='font-bold text-white'>Минимальный заказ:</p>
                        <p className='text-white w-96'>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                            Доставка оператором такси от любой суммы заказа - по тарифам
                            перевозчика.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
