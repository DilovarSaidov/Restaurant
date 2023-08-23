import React from "react";
import cold1 from "../../../../assets/fish1.jpg";
import cold2 from "../../../../assets/fish2.jpg";
import cold3 from "../../../../assets/fish3.jpeg";
import cold4 from "../../../../assets/fish4.jpg";
import cold5 from "../../../../assets/fish5.jpg";
import cold6 from "../../../../assets/fish6.jpg";
import cold8 from "../../../../assets/fish7.jpg";
import Fish from "./Fish";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Fishs() {
  const fishs = [
    {
      id: crypto.randomUUID(),
      img: cold1,
      nameFood: "Лосось",
      weight: "330гр",
      about: "Жареный лосось",
      price: "35c",
    },
    {
      id: crypto.randomUUID(),
      img: cold2,
      nameFood: "Тунец",
      weight: "400гр",
      about: "Тунец в соевом соусе",
      price: "50c",
    },
    {
      id: crypto.randomUUID(),
      img: cold3,
      nameFood: "Окунь",
      weight: "250гр",
      about: "Окунь с овощами",
      price: "28c",
    },
    {
      id: crypto.randomUUID(),
      img: cold4,
      nameFood: "Форель",
      weight: "330гр",
      about: "Запеченный форель",
      price: "46c",
    },
    {
      id: crypto.randomUUID(),
      img: cold5,
      nameFood: "Скумбрия",
      weight: "240гр",
      about: "Скумбрия в томатном соусе",
      price: "37c",
    },
    {
      id: crypto.randomUUID(),
      img: cold6,
      nameFood: "Судак",
      weight: "400гр",
      about: "Жареный судак с лимоном",
      price: "29c",
    },
    {
      id: crypto.randomUUID(),
      img: cold8,
      nameFood: "Минтай",
      weight: "330гр",
      about: "Жареный минтай",
      price: "42c",
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
        {fishs.map((fish) => (
          <Fish fish={fish} key={fish.id} />
        ))}
      </Slider>
    </div>
  );
}
