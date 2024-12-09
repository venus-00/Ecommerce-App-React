"use client";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./cartItem";
import { CartContext } from "./cartContext"

const Navbar = () => {
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);

    return (
        <div>
            <div className=" navbar bg-blue-950">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-white text-xl">Your Store</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator text-white">
                                <FaCartShopping size={30} />
                                <span className="badge badge-sm indicator-item bg-orange-600  text-white">{itemAmount}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact bg-white dropdown-content z-[1] mt-3 w-[400px] shadow">
                            <div className="card-body">
                                <div>
                                    {cart.map((item) => {
                                        return <CartItem item={item} key={item.id} />;
                                    })}
                                </div>
                                <span className="text-lg font-bold">Your Cart</span>
                                <span className="text-red-700">Total: ${" "}
                                    {parseFloat(total).toFixed(2)}</span>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="cursor-pointer py-4 w-12 h-12 flex justify-center items-center text-xl"
                                    >
                                        <FiTrash2 size={25} onClick={clearCart} />
                                    </div>
                                    <Link
                                        to={"/checkout"}
                                        className="bg-blue-950 text-white flex p-3 justify-center items-center w-full font-medium"
                                    >
                                        Checkout
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white avatar">
                            <IoPerson size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
