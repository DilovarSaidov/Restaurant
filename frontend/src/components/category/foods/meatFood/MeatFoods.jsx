import React from 'react'
import cold1 from '../../../../assets/meat1.jpg'
import cold2 from '../../../../assets/meat2.jpg'
import cold3 from '../../../../assets/meat3.jpg'
import cold4 from '../../../../assets/meat4.jpg'
import cold5 from '../../../../assets/meat5.avif'
import cold6 from '../../../../assets/meat6.jpg'
import cold8 from '../../../../assets/meat7.jpg'
import MeatFood from './MeatFood'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

export default function MeatFoods() {

  const meatFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Шашлык', weight: '330гр', about: 'Сочный, ароматный, пикантный шашлык.', price: '45c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Кебаб', weight: '400гр', about: 'Ароматный, пряный, сочный кебаб.', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Куринный', weight: '250гр', about: 'Нежный, сочный, ароматный куриный шашлык.', price: '65c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Стейк', weight: '330гр', about: 'Сочный, нежный, ароматный стейк.', price: '48c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Т-боун', weight: '240гр', about: 'Аппетитный, сочный, горячий Т-боун.', price: '53c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Фланк', weight: '400гр', about: 'Ароматный, сочный, пряный фланк.', price: '46c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Портерхаус', weight: '330гр', about: 'Богатый, сочный, роскошный Портерхаус.', price: '35c' },
  ];


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[#403C3B] overflow-hidden px-8">
      <Slider {...settings}>
        {meatFoods.map((meatFood) => (
            <MeatFood meatFood={meatFood} key={meatFood.id} />
        ))}
      </Slider>
    </div>)
}
