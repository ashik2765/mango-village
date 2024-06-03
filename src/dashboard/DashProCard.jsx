import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function DashProCard({ product, onDelete }) {
    const { _id, name, price, image } = product;

    const handleDelete = async () => {

        await fetch(`http://localhost:5000/mangos/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => {
                onDelete(_id)
                toast.success("Deleted Successfully")
            })
    };
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
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 mx-2 rounded-full hover:bg-yellow-600 transition duration-300">
                    <Link to={`/product/${_id}`}>See Details</Link>
                </button>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-5 mx-2 rounded-full hover:bg-yellow-600 transition duration-300">
                    <Link to={`/dashboard/edit/${_id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(_id)} className="mt-4 bg-red-500 text-white py-2 px-4 mx-2 rounded-full hover:bg-red-600 transition duration-300">
                    Delete
                </button>
            </div>
        </div>
    )
}
