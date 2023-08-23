import React from "react";
import cold1 from "../../../../assets/drinks (2).jpg";
import cold2 from "../../../../assets/drinks (1).jpg";
import cold3 from "../../../../assets/drinks (3).jpg";
import cold4 from "../../../../assets/drinks (4).jpg";
import cold5 from "../../../../assets/drinks (7).jpg";
import cold6 from "../../../../assets/drinks (6).jpg";
import cold8 from "../../../../assets/drinks (5).jpg";
import Drink from "./Drink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Drinks() {
  const drinks = [
    {
      id: crypto.randomUUID(),
      img: cold1,
      nameFood: "Вишневый",
      weight: "1 стакан",
      about: "Свежий, сладкий, освежающий вишневый компот.",
      price: "25c",
    },
    {
      id: crypto.randomUUID(),
      img: cold2,
      nameFood: "Мохито",
      weight: "1 стакан",
      about: "Освежающие, тропические, ароматные  мохито.",
      price: "17c",
    },
    {
      id: crypto.randomUUID(),
      img: cold3,
      nameFood: "Витаминный",
      weight: "1 стакан",
      about: "Сочный, освежающий, питательный  компот.",
      price: "28c",
    },
    {
      id: crypto.randomUUID(),
      img: cold4,
      nameFood: "Малиновый",
      weight: "1 стакан",
      about: "Ароматный, сладкий, освежающий  компот.",
      price: "12c",
    },
    {
      id: crypto.randomUUID(),
      img: cold5,
      nameFood: "Клубничный",
      weight: "1 стакан",
      about: "Свежий, ягодный, ароматный компот.",
      price: "30c",
    },
    {
      id: crypto.randomUUID(),
      img: cold6,
      nameFood: "Лайм",
      weight: "1 стакан",
      about: "Освежающие, кисло-сладкие, ароматные  лайм.",
      price: "22c",
    },
    {
      id: crypto.randomUUID(),
      img: cold8,
      nameFood: "Мультифрукт",
      weight: "1 стакан",
      about: "Сочный, многофруктовый, освежающий компот.",
      price: "35c",
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
        {drinks.map((drink) => (
          <Drink drink={drink} key={drink.id} />
        ))}
      </Slider>
    </div>
  );
}
