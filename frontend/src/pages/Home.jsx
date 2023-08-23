import React from 'react';
import About from '../components/category/about/About';
import Category from '../components/category/Category';
import DishesOrder from '../components/category/dishesOrder/DishesOrder';
import Menu from '../components/category/menu/Menu';
import Slider from '../components/category/slider/Slider';

export default function Home() {

  return (
    <>
    <Slider/>
    <section>
      <Category/>
      <Menu/>
    </section>
    <About/>
    <DishesOrder/>
    </>
  );
}