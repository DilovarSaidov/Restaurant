import React from "react";
import cold1 from "../../../../assets/soup1.jpg";
import cold2 from "../../../../assets/soup2.jpg";
import cold3 from "../../../../assets/soup3.jpg";
import cold4 from "../../../../assets/soup4.jpg";
import cold5 from "../../../../assets/soup5.jpg";
import cold6 from "../../../../assets/soup6.jpg";
import cold8 from "../../../../assets/soup7.jpg";
import Soup from "./Soup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Soups() {
  const soups = [
    {
      id: crypto.randomUUID(),
      img: cold1,
      nameFood: "Томатный",
      weight: "1 порция",
      about: "Ароматный, горячий, сытный томатный суп.",
      price: "28c",
    },
    {
      id: crypto.randomUUID(),
      img: cold2,
      nameFood: "Куринный",
      weight: "1 порция",
      about: "Питательный, ароматный, утоляющий куринный суп.",
      price: "37c",
    },
    {
      id: crypto.randomUUID(),
      img: cold3,
      nameFood: "Борщ",
      weight: "1 порция",
      about: "Богатый, насыщенный, традиционный борщ.",
      price: "18c",
    },
    {
      id: crypto.randomUUID(),
      img: cold4,
      nameFood: "Фасолевый",
      weight: "1 порция",
      about: "Сытый, питательный, ароматный фасолевый суп.",
      price: "42c",
    },
    {
      id: crypto.randomUUID(),
      img: cold5,
      nameFood: "Французский",
      weight: "1 порция",
      about: "Изысканный, нежный, ароматный французский суп.",
      price: "23c",
    },
    {
      id: crypto.randomUUID(),
      img: cold6,
      nameFood: "Харчо",
      weight: "1 порция",
      about: "Острый, ароматный, пикантный харчо.",
      price: "35c",
    },
    {
      id: crypto.randomUUID(),
      img: cold8,
      nameFood: "Минестроне",
      weight: "1 порция",
      about: "Сочный, овощной, томатный Минестроне суп.",
      price: "26c",
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
        {soups.map((soup) => (
          <Soup soup={soup} key={soup.id} />
        ))}
      </Slider>
    </div>
  );
}
