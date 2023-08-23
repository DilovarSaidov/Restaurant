import React from 'react'
import Foto from '../../../assets/about.png'
import { GiCook } from 'react-icons/gi'
import { SlEnergy } from 'react-icons/sl'
import { BiDish } from 'react-icons/bi'
export default function About() {
    return (
        <div className='bg-[#403C3B] hidden sm:block '>
            <div className='p-8  relative top-32'>
                <div style={{ backgroundImage: `url(${Foto})`, height: `80vh`, width: `100%`, backgroundSize: 'cover' }}
                 className='px-10 rounded-xl flex justify-between items-center'>
                    <div className='w-[45vh] text-white flex flex-col gap-10 hover:text-green-400'>
                        <h1 className='text-2xl'>НАШЕ КАФЕ</h1>
                        <p>Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                        <button className='border-2 text-center w-[22vh] p-2 rounded-xl bg-gray-800 pl-5' >ПОСМОТРЕТЬ МЕНЮ</button>
                    </div>
                    <div className=' w-[60vh] flex flex-col gap-4 text-white '>
                      <div className='flex gap-4'>
                      <div className='w-[100%] bg-[#504B4AE5] flex flex-col items-center py-14 hover:text-green-400'>
                            <BiDish className='w-[6vh] h-[6vh]'/>
                            <p>Свежайшие продукты</p>
                        </div>
                        <div className='w-[100%] bg-[#504B4AE5] flex flex-col items-center py-14 hover:text-green-400'>
                            <SlEnergy className='w-[6vh] h-[6vh]' />
                            <p>Быстрая доставка</p>
                        </div>
                      </div>
                        <div className='flex gap-4'>
                        <div className='w-[100%] bg-[#504B4AE5] flex flex-col items-center py-14 hover:text-green-400'>
                            <GiCook className='w-[6vh] h-[6vh]' />
                            <p>Лучшие повора</p>
                        </div>
                        <div className='w-[100%] bg-[#504B4AE5] flex flex-col items-center py-14 hover:text-green-400'>
                            <BiDish className='w-[6vh] h-[6vh]'/>
                            <p>Лучшие блюдо</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

