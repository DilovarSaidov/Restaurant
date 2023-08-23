import React from "react";
import logo from "../../assets/LOGO.png";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#403C3B] flex items-center  w-full text-white gap-[100px] p-[2vh] xs:w-[100%] xs:p-[1vh] xs:flex xs:gap-10">
      <div className=" rounded-full bg-white text-black ml-20 xs:ml-2">
        <button className="p-4" onClick={handleScrollToTop}>
          <FaArrowUp />
        </button>
      </div>
      <div className="pt-10 pb-2 flex flex-col gap-2 xs:gap-1 ">
        <img src={logo} className="w-[150px]" alt="" />
        <p className="text-[12px]">© ООО СК «АПШЕРОН» <br /> Все права защищены. 2010-2020 </p>

        <div className="flex flex-col gap-2 text-[14px]">
          <a href="a" className="hover:text-green-400">Ползовательское соглашение</a>
          <a href="a" className="hover:text-green-400">Карта сайта</a>
          <a href="a" className="hover:text-green-400">Политика конфиденциальности</a>
        </div>
      </div>
      <div className="flex pl-6 gap-11 text-[20px] xs:hidden">
        <a href="a" className="hover:text-green-400">О ресторане</a>
        <Link to='Conditions'><a href="stock" className="hover:text-green-400">Условия доставки</a></Link>
        <a href="a" className="hover:text-green-400">Возврат товара</a>
        <Link to='Stock'><a href="stock" className="hover:text-green-400">Акция</a></Link>
      </div>
    </div>
  );
}
