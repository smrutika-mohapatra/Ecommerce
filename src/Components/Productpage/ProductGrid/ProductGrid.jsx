import React from 'react';

const products = [
    {
        id: 1,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/8c0c/a0e8/d8be1a81d04efa229848009039d172d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE4GAV4ootG~lNqxbLnFfNsqvkdPwQybiyNMCLo-McH7in~tSP~pFJc~M4dGhXOlGXPN9R5oQRHhK8KsMERHppgmg0IjfW9-g8H3HnxoLTrfO3IN30xneg3ni3FxlJzOAvHqKIT1aPU585vxS763nBjht2WGvpH3bIYgVTui5kjUrUBW1yvQaeO4GBwy~uskIDPD8K4V-mzEeyCc~aZqh5KDqyQn9T8gdC0ZLDeWZavtxXU7MA6eaChB~4zovduV-2xMxGcF7m8BgRb63GvWmVJ60~C3l3RPeI2YVb4w1DFTknbJOGlg4WCIMPWZ2BSLZ1r2VutX13u7haywiQYXUw__', // Replace with your image URLs
    },
    {
        id: 2,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/c1a3/4614/24fb31135576e051e41d40d25916f64a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W9BiMrdtLBk26vVfiNzrqKbz7wHN6TUl6ELrb56BwRxePcIGTGwKYl4FpJf6wsu6TSLK-8bfs-bRzuND8~8-46dDm74RjIeLSWVh4Gy3-A7BSjk6hGFVXdOo3h-pvzlYl~hOKih9TjaV8B598DVcv8dsZi8ixqxHVkCPQDRq26rcoMxWWhNoZaXFwsIxAxMopSdPUrXV6jgNFrbZ9Lvg8tHSQIfCVott4MpWs44Br8yI3M4PbgnbtycH3jTVzkTXgkl4FMQZdgW3E45p3ZKWK43rQpQAqkdlyMrepM9YjDvCEtHXCqOUfHmXVHvRV0dfV1BMe13O3j8VbGeX-4DqMQ__',
    },
    {
        id: 3,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/3235/71f4/a0cd6f2ab33fd5fc20e7b4460c5fceb9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sl8dZjRKFfIJg5u9D4UCQ0Y7S1xasWJD0MKFZ8NCX5aMOrBR6SEKkqvoyt1dP56m2yfdnpOZozwEu3-MALK1Wn5Qq1mwU1HsCvFj3CfNMyskyTCu3lUTXX~Z69unQffYKrcjxcB8A3evxbxwoii-nvoaAr6ZpS4inQf8AttdQJZzVCQh2Lz9gdZaFUWOqLhe0Y5PNa866K6g5~1MtafVwN52tTC8bwHXmQMkR4SAA8aRAk7vSzdbODHzau32L4Mk5mivgwgaAeJ7OJmAR-8z-rwak2E3b~PRJidDnAY1tWAPvPF4zUlHNA732we6~5wGzX8d5xPVlaiif39yBrEPfA__',
    },
    {
        id: 4,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/667e/5acf/bfe48e90bbc40b5e194abcdf6354e753?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Set2x62SF0Gu9sctOTKUTvEfhcsM1whapcXUhBClygqpfO39mRErlmj5xD5grelW81hxB3tD~7CUiTZl5EULWlu1bwu8~blw6MRp7x0XvkZSx8dGPvZqxfT60uj9wW6TfEs08JSo4ecixXTlBE6curujaPBdD269OF5rAeYFPxwrlaEka4Jb4hnG2cy8Jo-sjB~IGLiwbMQ9bhbkr3~S8IEH61H6P2OspdCnHgpX5NTzkhAXOWRW86XtZWjJS7oWQxnydeMPDLcPVIrPd8AUmA2wViCXnAw1EQ-H-GkW2wTDp-V1fMAfIqA5k7hkM1-CDQTIMKGXyKLa3g4IYjr0qA__',
    },
    {
        id: 5,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/9ba5/6756/998038f9f79c0b23827ef8a52800c192?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OytTx1ZW7H7g6nVvaRQwIQaG8rRvh4GIDAD7Oaj1pGgWy7wppLMXMm-42ZIqWzFCnaqadrsSn4-b8ohM-nqhbqmVMyM7n3dH0IbSZzVFXlcUWyFzUOL1d81SwD~YU4SZHF-RVfTPoaNFF~3f9EOplPu3JiWLZpwHl9LqAbmv9M7N2Sg~LDa1vZZlE~mi-2mM-xHa-NNO5mUhH~0fnDvEgkjpZZjYJRJ3acJKn0QiTAjzWAIRDiSk1AvWDNu6tKuYWAeA~7v3PahAnrvRHshiFg7PbFSQ8VepBi2igoNRjLiO0XwzicsFxITGoqP2nBf1NnQUS-zlnb5EX-xbZ1qdwA__',
    },
    {
        id: 6,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/e8fc/5dfd/170b351eb9b930d58427e5a2c052c1e1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JxYkyadrBgmwGlsiGVOaZEY-ivGr-p~1iBU9Rocowj9jhVRzaO-s8HXip4qVOFdjbdY7JB0CRBdHRDOTK9QpfoYHqwJ0s0SB0gOrEICq1n4yLV9zCPY6B3AyLFj1RCJLB15dT4vxA8b1b4zBbtRAJqsxaUoHQGouSZMDk9k5N7Uq~TaqJQHS8EP2dJFG5CMLIUmV9iNOOl39--CcSU1-tzozWF-5wwOxC5d2VJ0EcNlnHUo08NYELr04jlHePHLSrInJRLRo0lKtad4akKAuGv6JF7D7nH~i3pKb15qy5e-bArHxICBupMFqgz5aVeav~~5aSBnH41E3MwxN6FL8nw__',
    },
    {
        id: 7,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/3e9d/c7e4/794c41d4d6d785c681e4b5ec34b84db2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvKnW6m9fzsWfdfWPebL8MEWXDgnU0XULVWJ6k0yvzoiahDv9BveRTXLDk883r6RA6CSuK1Kv8YY6gBWKwUo8m4dyZMbLQ2wQbeDMmSLFirY7SAV6AvyUCB1mQ8eC2EZmu3n~-EmNBpCEltuTvriF4kpdzXtOH3sxeqqpD1jd7Fa~PvcFXonp2jjLjZhYGHEBUl2rgK-VRI9LLhHL5J0RVugKsum4P8qn9~Te4rX9Dtzpgn~k9p03MV-p8t-rao~FtuduzudySEK8yEIBj6T4duk4BOWao1ySocal8CWFx0vp8vix-yGKZ0mpL-D3yXkYNT38sp7jjW-aRxBoNeIHQ__',
    },
    {
        id: 8,
        name: 'Womens Denim Jacket',
        brand: 'Brand Name',
        rating: 4.4,
        price: 700,
        originalPrice: 1000,
        discount: '(30% off)',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/3786/1c16/6cfaf9b926707612f5efcd11149159c8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCTWKKtp7KInjZioId6EX82uo1x-ZvSI5xHffFUBqo2sgcCTAZv8aMuqjM9NKK~MFNWKs5nJ0HYX6K30zujSKZnUsuj6FUAIL8UcZHh8ZGpN84efKaCPrIEBhW0h9ogJNi8scClPz7Kr3~KuiLLv2Dcbo6av5wsI2~-DgH~YGtrHaqLQPNj4yWmYlxFfNJKrqitgYRLejgW4Vg8Nm3B~3CtbnSiqo-ulg~egN5rRUAYTGgndIbSx4poCkBHawMXU287NQj9pp67AyKBGl4~yM4IDtuNBZPFv0VmYwc9pD33z40jK3J-bkOYjkDcB6xN4GaacbnweaV-7DatHNkZp3g__',
    },
];

const ProductGrid = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold mb-6">Customer Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-sm overflow-hidden bg-white"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-2">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <div className='flex'>
                                <p className="text-sm text-gray-500">{product.brand}</p>
                                <div className="flex items-center mt-0 flex-row">
                                    <span className="ml-1 text-sm text-gray-700 ml-2">{product.rating}</span>
                                    <span className="text-yellow-500">★</span>
                                   
                                </div>
                            </div>
                            <div className='flex'>
                            <div className="mt-0">
                                <span className="text-xl font-bold text-gray-900">Rs. {product.price}</span>
                                <span className="line-through text-sm text-gray-500 ml-2">Rs. {product.originalPrice}</span>
                                
                            </div>
                            <div className="text-green-500 text-sm mt-2 ml-4">{product.discount}</div>
                       
                            </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;