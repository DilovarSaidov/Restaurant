import React from "react";
import cold1 from "../../../../assets/grill1.jpg";
import cold2 from "../../../../assets/grill2.jpg";
import cold3 from "../../../../assets/grill3.jpg";
import cold4 from "../../../../assets/grill4.jpg";
import cold5 from "../../../../assets/grill5.jpg";
import cold6 from "../../../../assets/grill6.jpg";
import cold8 from "../../../../assets/grill7.avif";
import Grill from "./Grill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Grills() {
  const grills = [
    {
      id: crypto.randomUUID(),
      img: cold1,
      nameFood: "Мясогамбр",
      weight: "330гр",
      about: "lorem",
      price: "55c",
    },
    {
      id: crypto.randomUUID(),
      img: cold2,
      nameFood: "Стейкокреветка",
      weight: "400гр",
      about: "lorem",
      price: "60c",
    },
    {
      id: crypto.randomUUID(),
      img: cold3,
      nameFood: "Грильгамбр",
      weight: "250гр",
      about: "lorem",
      price: "49c",
    },
    {
      id: crypto.randomUUID(),
      img: cold4,
      nameFood: "Стейкгамбр",
      weight: "330гр",
      about: "lorem",
      price: "65c",
    },
    {
      id: crypto.randomUUID(),
      img: cold5,
      nameFood: "Грильпрон",
      weight: "240гр",
      about: "lorem",
      price: "48c",
    },
    {
      id: crypto.randomUUID(),
      img: cold6,
      nameFood: "Мясосате",
      weight: "400гр",
      about: "lorem",
      price: "63c",
    },
    {
      id: crypto.randomUUID(),
      img: cold8,
      nameFood: "Мясопрон",
      weight: "330гр",
      about: "lorem",
      price: "45c",
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
        {grills.map((grill) => (
          <Grill grill={grill} key={grill.id} />
        ))}
      </Slider>
    </div>
  );
}
