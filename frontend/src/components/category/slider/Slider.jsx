import React, { useState, useEffect } from 'react';
import foto from '../../../assets/slider.png';
import foto1 from '../../../assets/stol2.jpeg';
import foto2 from '../../../assets/drinks (6).jpg';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleNextSlide = () => {
    const lastIndex = 2;
    setActiveIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };


  return (
    <div className="relative">
      <img
        src={activeIndex === 0 ? foto : activeIndex === 1 ? foto1 : foto2}
        alt="slider"
        className="h-[400px] w-full object-cover sm:h-[660px]"
      />
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${activeIndex === 0 ? 'bg-white w-8' : ''
            }`}
          onClick={() => handleSlideChange(0)}
        />
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${activeIndex === 1 ? 'bg-white w-8' : ''
            }`}
          onClick={() => handleSlideChange(1)}
        />
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${activeIndex === 2 ? 'bg-white w-8' : ''
            }`}
          onClick={() => handleSlideChange(2)}
        />
      </div>
      <h1 className="text-white absolute top-[170px] ml-5  italic font-normal text-3xl text-center transform -rotate-6 sm:text-5xl sm:ml-[100px] sm:w-[600px]">
        {activeIndex === 0
          ? 'ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ'
          : activeIndex === 1
            ? 'ЗАКАЗЫВАЙТЕ СТОЛИК ДАЖЕ СИДЯ ДОМА'
            : 'ХОЛОДНЫЕ НАПИТКИ И СОКИ'}
      </h1>
      <button className="bg-green-400 text-white absolute top-[280px] px-2 py-2 ml-28 italic font-normal text-xl text-center transform -rotate-6 sm:text-2xl sm:ml-[280px] sm:top-[360px]">
        ЕЩЁ НЕ ПРОБОВАЛ?
      </button>
    </div>
  );
}
