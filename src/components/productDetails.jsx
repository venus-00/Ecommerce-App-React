import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./cartContext";
import { ProductContext } from "./productContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { products } = useContext(ProductContext);

    const product = products.find((item) => {
        return item.id === parseInt(id);
    });


    // destructure product
    const { title, price, description, image } = product;
    return (
        <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                {/* image and text wrapper */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* image */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
                    </div>
                    {/* text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
                        <div className="text-2xl font-medium mb-6">$ {price}</div>
                        <p className="mb-8">{description}</p>
                        <button onClick={() => addToCart(product, product.id)} className='bg-blue-950 py-4 px-8 text-white hover:bg-orange-600'>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;