import React from 'react';
import ProductGrid from './ProductGrid';

const Product = () => {
    return (
       <div>
         <div className="max-w-4xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg">
                {/* Left - Product Images */}
                <div className="md:w-2/3 flex flex mt-12">
                    <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 p-2">
                        <img src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__" alt="Thumbnail 1" className="w-20 h-20 object-cover rounded" />
                        <img src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__" alt="Thumbnail 2" className="w-20 h-20 object-cover rounded" />
                        <img src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__" alt="Thumbnail 3" className="w-20 h-20 object-cover rounded" />
                        <img src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__" alt="Thumbnail 2" className="w-20 h-20 object-cover rounded" />
                        <img src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__" alt="Thumbnail 3" className="w-20 h-20 object-cover rounded" />
                    </div>
                    <div >
                        <img
                            src="https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__"
                            alt="Product Image"
                            className="w-full object-cover rounded-t-lg rounded h-4/5 w-96 mt-2"
                        />
                    </div>

                </div>

                {/* Right - Product Details */}
                <div className="md:w-2/3 p-5">
                    <h1 className="text-2xl font-semibold text-gray-800">Product Details</h1>
                    <p className="mt-1 text-sm text-gray-600">Online Description Will Be Given For Bulk Upload</p>

                    <div className="mt-1">
                        <span className="text-l font-semibold">Discount: % Off</span>
                    </div>

                    <div className="mt-1">
                        <span className="block font-semibold text-gray-700">Sizes:</span>
                        <span className="block text-xs text-gray-500">S, M, L, XL, XXL, XXXL</span>
                    </div>

                    <div className="mt-1">
                        <h2 className="text-lg font-semibold text-gray-800">Product Specifications</h2>
                        <ul className="mt-2 text-xs text-gray-600 space-y-2">
                            <li><span className="text-gray-600 font-bold underline">Size & Fit:</span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Material & Care: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Sleeve Length: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Type: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Length: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Print & Pattern Type: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Neck Type: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Fabric Type: </span> Drop Down list will be provided</li>
                            <li><span className="text-gray-600 font-bold underline">Main Term Ethnic: </span> Drop Down list will be provided</li>
                        </ul>
                    </div>

                    <div className="mt-1">
                        <span className="block text-gray-600">100% Original Product</span>
                        <span className="block text-gray-600">Try & Buy is Not Available</span>
                    </div>

                    <div className="mt-6">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <ProductGrid/>
       </div>
    );
};

export default Product;
