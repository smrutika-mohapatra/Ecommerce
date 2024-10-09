import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import products from './ProductsCategory';



const ProductCategoryCarousel = () => {
    // State to track the current index for both Men and Women sections
    const [menIndex, setMenIndex] = useState(0);
    const [womenIndex, setWomenIndex] = useState(0);

    // Helper functions to move to the next and previous products
    const handleNext = (category) => {
        if (category === 'men') {
            setMenIndex((prevIndex) => (prevIndex + 1) % products.length);
        } else if (category === 'women') {
            setWomenIndex((prevIndex) => (prevIndex + 1) % products.length);
        }
    };

    const handlePrev = (category) => {
        if (category === 'men') {
            setMenIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
        } else if (category === 'women') {
            setWomenIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
        }
    };

    // Helper to get visible products
    const getVisibleProducts = (index) => {
        const visibleProducts = [];
        for (let i = 0; i < 3; i++) {  // Show 3 products at a time
            visibleProducts.push(products[(index + i) % products.length]);
        }
        return visibleProducts;
    };

    return (
        <div>
            {/* Header */}
            <h2 className="text-3xl font-semibold text-center mb-8 text-red-600">
                Product Base Category
            </h2>
            <div className="bg-orange-200 py-10 rounded-3xl max-w-7xl mx-auto">


                {/* Horizontal Flex Container for Men and Women sections */}
                <div className="flex justify-between items-center px-4 space-x-10">
                    {/* Men Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-center mb-6 text-red-900">Men</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                className="p-2 rounded-full  text-black"
                                onClick={() => handlePrev('men')}
                            >
                                <FaArrowLeft />
                            </button>
                            <div className="flex space-x-6">
                                {getVisibleProducts(menIndex).map((product, index) => (
                                    <div key={index} className="bg-white p-4 shadow-lg rounded-lg w-32">
                                        <div className="h-24 w-24 bg-gray-100 mx-auto mb-2 rounded-full">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        </div>
                                        <p className="text-center font-semibold text-sm">{product.name}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="p-2 rounded-full text-black"
                                onClick={() => handleNext('men')}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-60 w-1 bg-red-950 mx-6"></div>

                    {/* Women Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-center mb-6 text-red-900">Women</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                className="p-2 rounded-full text-black"
                                onClick={() => handlePrev('women')}
                            >
                                <FaArrowLeft />
                            </button>
                            <div className="flex space-x-6">
                                {getVisibleProducts(womenIndex).map((product, index) => (
                                    <div key={index} className="bg-white p-4 shadow-lg rounded-lg w-32">
                                        <div className="h-24 w-24 bg-gray-100 mx-auto mb-2 rounded-full">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        </div>
                                        <p className="text-center font-semibold text-sm">{product.name}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="p-2 rounded-full text-black"
                                onClick={() => handleNext('women')}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCarousel;