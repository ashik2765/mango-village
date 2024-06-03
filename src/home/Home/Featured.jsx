import React from 'react'

export default function Featured() {
    const mangoOfTheMonth = {
        name: 'Alphonso Mangoes',
        description: 'Known as the king of mangoes, Alphonso mangoes are prized for their rich, creamy texture and sweet flavor. Perfect for desserts, smoothies, or enjoying on their own.',
        price: '$20 per kg',
        discountPrice: '$18 per kg',
        image: 'https://i.ibb.co/SNYP7Jx/mango2.webp'
    };
    return (
        <div className="bg-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex">
                <img
                    src={mangoOfTheMonth.image}
                    alt={mangoOfTheMonth.name}
                    className="h-80 w-full md:w-1/2 object-cover"
                />
                <div className="p-8 md:p-16 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Mango of the Month
                    </h2>
                    <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
                        {mangoOfTheMonth.name}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {mangoOfTheMonth.description}
                    </p>
                    <div className="text-xl text-gray-900 mb-2">
                        <span className="line-through">{mangoOfTheMonth.price}</span> <span className="text-red-600 font-semibold">{mangoOfTheMonth.discountPrice}</span>
                    </div>
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
