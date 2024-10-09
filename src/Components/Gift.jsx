import React from 'react';
import imageSrc from '../assets/gift.jpeg'; // Assuming you have added the image here

// GratifyingCard Component
const GratifyingCard = ({ imageSrc, title }) => {
    return (
        <div className="flex flex-col items-center p-4 rounded-xl">
            <img src={imageSrc} alt={title} className="w-32 h-32 rounded-lg object-cover" />
            <p className="mt-4 text-lg font-semibold text-gray-700">{title}</p>
        </div>
    );
};

// App Component
const App = () => {
    return (
        <div className=" py-10 rounded-3xl max-w-7xl mx-auto">
            <h1 className="text-3xl font-semibold text-left mb-8 text-black ml-20">Gifts for you</h1>
            <p className="text-l max-w-2xl font-semibold text-left mb-8 text-black ml-20">Indulge in the joy of shopping with us  every purchase is a gift, our way of saying thank you for choosing style and quality from Lokalitha Fashion</p>
            <div className="min-h-14 bg-red-200 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-4">
                    <GratifyingCard imageSrc={imageSrc} title="Gratifying 1" />
                    <GratifyingCard imageSrc={imageSrc} title="Gratifying 2" />
                    <GratifyingCard imageSrc={imageSrc} title="Gratifying 3" />
                    <GratifyingCard imageSrc={imageSrc} title="Gratifying 4" />
                    <GratifyingCard imageSrc={imageSrc} title="Gratifying 5" />

                </div>
            </div></div>
    );
};

export default App;
