import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const { id, image, category, title, price } = product;
    return (
        <div className="container flex flex-col justify-between h-[500px]">
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <Link to={`/product/${id}`}>
                            <img
                                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                                src={image}
                                alt="#"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <h2 className="font-semibold">$ {price}</h2>
            </div>

            <div className="flex justify-end items-end mt-4">
                <button
                    onClick={() => addToCart(product, id)}
                    className="py-2 px-4 bg-blue-950 h-12 text-white hover:bg-orange-600 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
