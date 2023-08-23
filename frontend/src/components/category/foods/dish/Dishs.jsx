import React from "react";
import cold1 from "../../../../assets/dish1.jpg";
import cold2 from "../../../../assets/dish2.jpg";
import cold3 from "../../../../assets/dish3.jpg";
import cold4 from "../../../../assets/dish4.jpg";
import cold5 from "../../../../assets/dish5.jpg";
import cold6 from "../../../../assets/dish6.jpg";
import cold8 from "../../../../assets/dish7.jpg";
import Dish from "./Dish";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Dishs() {
  const dishs = [
    {
      id: crypto.randomUUID(),
      img: cold1,
      nameFood: "Эклер",
      weight: "330гр",
      about: "lorem",
      price: "46c",
    },
    {
      id: crypto.randomUUID(),
      img: cold2,
      nameFood: "Лобстер",
      weight: "400гр",
      about: "lorem",
      price: "30c",
    },
    {
      id: crypto.randomUUID(),
      img: cold3,
      nameFood: "Тако",
      weight: "250гр",
      about: "lorem",
      price: "28c",
    },
    {
      id: crypto.randomUUID(),
      img: cold4,
      nameFood: "Фондю",
      weight: "330гр",
      about: "lorem",
      price: "35c",
    },
    {
      id: crypto.randomUUID(),
      img: cold5,
      nameFood: "Карри",
      weight: "240гр",
      about: "lorem",
      price: "26c",
    },
    {
      id: crypto.randomUUID(),
      img: cold6,
      nameFood: "Фалафель",
      weight: "400гр",
      about: "lorem",
      price: "43c",
    },
    {
      id: crypto.randomUUID(),
      img: cold8,
      nameFood: "Димсам",
      weight: "330гр",
      about: "lorem",
      price: "37c",
    },
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
        {dishs.map((dish) => (
          <Dish dish={dish} key={dish.id} />
        ))}
      </Slider>
    </div>
  );
}
