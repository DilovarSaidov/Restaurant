import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decProduct, incProduct, removeProduct } from "../Reduser/basket";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Trash = () => {
  const basket = useSelector(({ basket }) => basket.basket);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let count = 0;
    basket.forEach((elem) => {
      count += elem.quantity;
    });
    setTotalItems(count);
  }, [basket]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((elem) => {
      const productPrice = parseFloat(elem.product.price);
      totalPrice += elem.quantity * (isNaN(productPrice) ? 0 : productPrice);
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="w-[100%] m-auto bg-[#403C3B]">
      <div className="h-[80vh] m-auto w-[95%] items-center pt-20">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-green-400">в корзине: {totalItems} товаров</h2>
        </div>
        {basket.map((elem) => (
          <div
            key={elem.product.id}
            className="p-4 text-brown-50  rounded-lg mb-4 shadow-md"
          >
            <div className="flex justify-between items-center">
              <div>
                <img
                  src={elem.product.img}
                  alt=""
                  className="w-[200px] m-auto"
                />
              </div>
              <div className="w-[20%] flex flex-wrap justify-center">
                <h1 className="text-[34px]">{elem.product.nameFood}</h1>
                <p className="text-[17px]">{elem.product.about}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => dispatch(incProduct(elem.product.id))}
                  className="text-white bg-green-400 rounded-full p-2 p-2 w-10 h-10 top-4 left-12"
                >
                  +
                </button>
                <span className="text-xl">{elem.quantity}</span>
                <button
                  onClick={() => dispatch(decProduct(elem.product.id))}
                  className="text-white bg-green-400 rounded-full p-2  p-2 w-10 h-10 top-4 left-12"
                >
                  -
                </button>
              </div>
              <div>{elem.product.price} сомони</div>
              <div>
                <span
                  onClick={() => dispatch(removeProduct(elem.product.id))}
                  className="cursor-pointer"
                >
                  <AiFillDelete className="text-green-400" />
                </span>
              </div>
            </div>
          </div>
        ))}
        <div
          className="pr-6 pt-4"
          style={{
            width: "763px",
            height: "105px",
            top: "1025px",
            left: "339px",
          }}
        >
          <div>
            <p className="text-white">
              Общая сумма: {calculateTotalPrice()} сомони.
            </p>
            <Link to="/order">
              <button className="bg-green-400 p-2 rounded-10">
                Оформить заказ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;
