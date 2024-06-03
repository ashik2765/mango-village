import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShopCard from './ShopCard';

export default function Shop() {

    const data = useLoaderData();
    return (

        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                All Products
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {
                    data.map(item => <ShopCard key={item._id} mango={item}></ShopCard>)
                }
            </div>
        </div>

    )
}
