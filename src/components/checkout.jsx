"use client";
import React, { useContext } from "react";
import CartItem from "./cartItem";
import { CartContext } from "./cartContext";
import { FiTrash2 } from "react-icons/fi";

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext);

    return (
        <div className="w-full h-full bg-gray-50 py-10 ">
            <div className="max-w-6xl mx-auto shadow-md rounded-md p-6 bg-white">
                <h1 className="text-2xl font-semibold mb-6 text-gray-700">Checkout</h1>
                {/* <FiTrash2 size={25} className="text-left" onClick={clearCart} /> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Summary */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-600">Your Cart</h2>
                        <div className="space-y-4">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <CartItem item={item} key={item.id} />
                                ))
                            ) : (
                                <p className="text-gray-500">Your cart is empty.</p>
                            )}
                        </div>
                        <div className="mt-4 text-right text-lg font-medium">
                            <span className="text-gray-700">Total: </span>
                            <span className="text-red-700">${parseFloat(total || 0).toFixed(2)}</span>
                        </div>
                    </div>
                    {/* Payment Form */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-600">Payment Details</h2>
                        <form className="space-y-4 p-6 rounded-lg shadow-md">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label
                                        htmlFor="expiry"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiry"
                                        placeholder="MM/YY"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label
                                        htmlFor="cvv"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        placeholder="123"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Complete Payment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
