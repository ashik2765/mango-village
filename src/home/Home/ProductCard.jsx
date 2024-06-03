import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard({ mango }) {
    const {_id, name, price, image } = mango;
    return (
        <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden">
            <img
                src={image}
                alt={name}
                className="h-56 w-full object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="mt-2 text-gray-700">$ {price} per/kg</p>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
                    <Link to={`product/${_id}`}>See Details</Link>
                </button>
            </div>
        </div>
    )
}
