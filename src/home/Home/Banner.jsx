import React from 'react'

export default function Banner() {
    return (
        <div className="relative bg-yellow-300 h-screen flex flex-col justify-center items-center text-center p-4">
            <img src='https://i.ibb.co/JvjnvRq/mango3.jpg'  alt="Mangoes" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
                    Welcome to Mango Paradise
                </h1>
                <p className="text-2xl md:text-3xl text-white mb-6 drop-shadow-lg">
                    Fresh, Juicy, and Delicious Mangoes Delivered to Your Doorstep
                </p>
                <button className="bg-white text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    )
}
