import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { addProduct } from "../../../../Reduser/basket";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Grill({ grill }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-white  border-2 p-4 rounded-xl bg-gray-800 m-3">
        <img src={grill.img} className="w-[100%] h-[30vh] rounded-lg" alt="" />
        <div className="flex justify-between items-center py-2">
          <h3 className="text-2xl font-bold">{grill.nameFood}</h3>
          <p>{grill.weight}</p>
        </div>
        <div className="h-[10vh]">
          <p>{grill.about}</p>
        </div>

        <div className="flex justify-between items-center py-2">
          <h2 className="text-3xl font-bold">{grill.price}</h2>

          <button
            onClick={() => dispatch(addProduct(grill))}
            className="bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2"
          >
            В корзину <TiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
}
