import React, { useEffect, useState } from "react";
import logo from "../../assets/LOGO.png";
import Calling from "../../assets/Calling.svg";
import burger from "../../assets/burger.svg";
import Buy from "../../assets/Buy.svg";
import ModalBasked from "./Modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const basket = useSelector(({ basket }) => basket.basket);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let count = 0;
    basket.forEach((elem) => {
      count += elem.quantity;
    });
    setTotalItems(count);
  }, [basket]);

  const handleModalClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <nav className="bg-[#403C3B] fixed top-0 z-50 border-gray-200 w-[100%]">
      <div className="flex flex-wrap items-center justify-around w-[95%]  m-auto p-4 xs:hidden">
        <Link to="/">
          <div>
            <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
          </div>
        </Link>
        <div className="flex w-[80%] items-center">
          <div className="relative  w-full">
            <div className="absolute pt-2 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-[80%] p-2 pl-10 text-sm rounded-md bg-[#504B4A] text-[#CFCFCF]"
              placeholder="Выберите меню"
            />
          </div>
          <div className="flex w-[100%] items-center">
            <button className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
              <img src={Calling} alt="" />
            </button>
            <div className="ml-2  ">
              <p className="text-[#CFCFCF]">Контакты:</p>
              <p className="text-[#fff]">+7 (917) 510-57-59</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-green-400 p-2 rounded-lg">
          {totalItems > 0 ? (
            <Link to="/Trash">
              <button className="text-white" onClick={handleModalClick}>
                Корзина
              </button>
            </Link>
          ) : (
            <button className="text-white" onClick={handleModalClick}>
              Корзина
            </button>
          )}
          {modalOpen && totalItems === 0 && (
            <div className={`modal z-50 w-[50%] ${modalOpen ? "animate" : ""}`}>
              <ModalBasked />
            </div>
          )}
          <div className="h-8 w-0.5 bg-white hidden sm:block"></div>
         
            <span className="rounded-full bg-white text-black w-4 h-4 flex items-center justify-center px-1">
              {totalItems}
            </span>
          
        </div>
      </div>
      {/* MEdiy */}
      <div className="xs:flex xs:flex-wrap xs:items-center xs:gap-2 justify-around xs:w-[95%]  xs:m-auto xs:p-4  hidden">
        <div className="w-[30%] p-2">
          <img src={burger} alt="" />
        </div>
        <div className="xs:w-[30%]">
          <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
        </div>
        <div className="xs:flex xs:flex-wrap xs:gap-4 xs:justify-center xs:items-center bg-green-400 p-1 rounded-2xl w-[30%]">
          <img src={Buy} alt="" />
          <hr className="w-14 h-[1px] bg-[#E5E5E5] border-0 rounded "></hr>
          <button className="text-white text-[12px]" onClick={handleModalClick}>
            Корзина
          </button>
          {modalOpen && (
            <div className={`modal z-50 ${modalOpen ? "animate" : ""}`}>
              <ModalBasked />
            </div>
          )}
          <div className="h-6 w-0.5 bg-white hidden sm:block"></div>
        </div>
        <div className="xs:w-[100%] items-center">
          <div className="relative  w-full">
            <div className="absolute pt-2 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-[100%] p-2 pl-10 text-sm rounded-md bg-[#504B4A] text-[#CFCFCF]"
              placeholder="Выберите меню"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
