import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { addProduct } from "../../../../Reduser/basket";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function HotFood({ hotFood }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-white  border-2 p-4 rounded-xl bg-gray-800 m-3">
        <img
          src={hotFood.img}
          className="w-[100%] h-[30vh] rounded-lg"
          alt=""
        />
        <div className="flex justify-between items-center py-2">
          <h3 className="text-2xl font-bold">{hotFood.nameFood}</h3>
          <p>{hotFood.weight}</p>
        </div>
        <div className="h-[10vh]">
          <p>{hotFood.about}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <h2 className="text-3xl font-bold">{hotFood.price}</h2>

          <button
            onClick={() => dispatch(addProduct(hotFood))}
            className="bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2"
          >
            В корзину <TiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
}
