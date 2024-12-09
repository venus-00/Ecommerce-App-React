import React, { useContext } from 'react'
import { ProductContext } from './productContext'
import Product from './product'
import Hero from './hero'

const Home = () => {
    const { products } = useContext(ProductContext);
    const allProducts = products;

    return (
        <div>
            <div>
                <Hero />
            </div>
            <h1 className='text-center text-4xl pt-5 font-bold'>Our Products</h1>
            <section className="pt-[40px] py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {allProducts.map((product) => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
