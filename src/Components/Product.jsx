import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Array of products with names and corresponding image URLs
const products = [
    { name: "Polo Shirts", image: "https://s3-alpha-sig.figma.com/img/20ab/fea2/3fb5087c1e55a1fa00080136d659b1d2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OyZDG9pWCSEH2-vldDbgDzgDcDLhg3hl3h3e5Tgnmnkf9eFT-q5Qhgl27vbSmyYjEWc4q3Sz91RrLZw7yMxPnxPVLxQn7OzYHdlCT8wL1UP6WdvR4fPM3kJzockGku5Nhl4Q7OhQmiCpROvVMFTWzfDdxBs6-t9UFBciSPWGWKZZ~GEim0DE1jdZ3qhIFwTl6tEPgTZ90nOeQ7m859XlPpmJkMcodhUKPaTox4rfz-Wv8sZnQYuYX1thf1iT~zK4j~ZNuRZdCwz1tD4Ia8besjJj2DMhH~N8fg1HHSGloG-r4xuDKHKQsywU8pxD1aKyn863pcspcBoRCr~oMMTqXw__" },
    { name: "T-Shirt", image: "https://s3-alpha-sig.figma.com/img/ce42/970e/7bb8a6cc9806b3463291989a68c835a8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUuHozToBRmWJPdW1t-ZehIP7eB310frKVJsktKAhHze5kskpunhM-FxSSTVymW2wJzUVCAIfkAriuzr6IlOIV1dDcxEnWhE16BlMWsGCG2EFdMrpIra6EzEPrZRe9qtjRGEEXexRnoXYzhexHmTGzko8QDmqJ77JZtx-Ea8mDrhobw75FEVxtxTZQE9nfOpBl0DFaqOuOP9UzqcAV-MGNnSN0bL4nizaDHXOt-YBVxcSFhYx5t01b-EjPK08U1i~0A-VKLrAQyfr37PLhTLai8LjjXK6qfg6AzkkhtRWNRDOceVUM4SQbQ9bVvsw9MoWzO78a-4uCQXKwx3M~Nciw__" },
    { name: "Tops", image: "https://s3-alpha-sig.figma.com/img/4b8c/1df0/a3a901d4b8dde3ddf74627806145d00d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-YZV4DWwZi5ZqFrvFyFX3497pbcrjtNesDxVVEgNrXXjfDD9vmkMVxrXgfTgBhGmZ2skpbizKa8DVcg8ZWa1v4QRFa8zTSoo6oFr88W87BFXV8X9riZsInoU4BwKjNK1EE0ZM2GV2Smah85dfPoYpzJtRg~TCYqJ8Vdp7N9C0q4rZwLE7vhlJstf8NlkGfwyEeTfiPdQ-DVsVbetRn-RqI4nVBEUK2k3bOrq6gJPXY~ExCH18AJ-eNANa8AFBaxkB5P7NM3Duo4zlykBdLTzu6LaBQtoY01-KOiP6618Pb-LCxrYef6HSYnYcij3xtb6Nmvbwc74YJNzYAEwdFRWg__" },
    { name: "Jackets", image: "https://s3-alpha-sig.figma.com/img/ce42/970e/7bb8a6cc9806b3463291989a68c835a8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUuHozToBRmWJPdW1t-ZehIP7eB310frKVJsktKAhHze5kskpunhM-FxSSTVymW2wJzUVCAIfkAriuzr6IlOIV1dDcxEnWhE16BlMWsGCG2EFdMrpIra6EzEPrZRe9qtjRGEEXexRnoXYzhexHmTGzko8QDmqJ77JZtx-Ea8mDrhobw75FEVxtxTZQE9nfOpBl0DFaqOuOP9UzqcAV-MGNnSN0bL4nizaDHXOt-YBVxcSFhYx5t01b-EjPK08U1i~0A-VKLrAQyfr37PLhTLai8LjjXK6qfg6AzkkhtRWNRDOceVUM4SQbQ9bVvsw9MoWzO78a-4uCQXKwx3M~Nciw__" },
    { name: "Polo", image: "https://s3-alpha-sig.figma.com/img/20ab/fea2/3fb5087c1e55a1fa00080136d659b1d2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OyZDG9pWCSEH2-vldDbgDzgDcDLhg3hl3h3e5Tgnmnkf9eFT-q5Qhgl27vbSmyYjEWc4q3Sz91RrLZw7yMxPnxPVLxQn7OzYHdlCT8wL1UP6WdvR4fPM3kJzockGku5Nhl4Q7OhQmiCpROvVMFTWzfDdxBs6-t9UFBciSPWGWKZZ~GEim0DE1jdZ3qhIFwTl6tEPgTZ90nOeQ7m859XlPpmJkMcodhUKPaTox4rfz-Wv8sZnQYuYX1thf1iT~zK4j~ZNuRZdCwz1tD4Ia8besjJj2DMhH~N8fg1HHSGloG-r4xuDKHKQsywU8pxD1aKyn863pcspcBoRCr~oMMTqXw__" },
    { name: "Sweaters", image: "https://s3-alpha-sig.figma.com/img/4b8c/1df0/a3a901d4b8dde3ddf74627806145d00d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-YZV4DWwZi5ZqFrvFyFX3497pbcrjtNesDxVVEgNrXXjfDD9vmkMVxrXgfTgBhGmZ2skpbizKa8DVcg8ZWa1v4QRFa8zTSoo6oFr88W87BFXV8X9riZsInoU4BwKjNK1EE0ZM2GV2Smah85dfPoYpzJtRg~TCYqJ8Vdp7N9C0q4rZwLE7vhlJstf8NlkGfwyEeTfiPdQ-DVsVbetRn-RqI4nVBEUK2k3bOrq6gJPXY~ExCH18AJ-eNANa8AFBaxkB5P7NM3Duo4zlykBdLTzu6LaBQtoY01-KOiP6618Pb-LCxrYef6HSYnYcij3xtb6Nmvbwc74YJNzYAEwdFRWg__" }

    // Add more products with image paths as needed
];

const ProductCategory = () => {
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

export default ProductCategory;
