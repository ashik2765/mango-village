import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function ProductDetails() {
    const data = useLoaderData();
    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="container mx-auto py-12 px-4">
                <div className=" flex flex-col md:flex-row gap-5 max-w-3xl mx-auto text-center mb-12">
                    <img src={data.image} alt="Mango" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
                    <div className='w-full md:w-1/2'>
                        <div className="text-2xl font-semibold mb-4">{data.name}</div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {data?.description}
                        </p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="text-2xl font-semibold mb-4">Nutritional Information</div>
                    <ul className="text-lg text-gray-700 leading-relaxed mb-8">
                        <li>Calories: 60 per 100g</li>
                        <li>Vitamin C: 36.4 mg per 100g</li>
                        <li>Vitamin A: 54 µg per 100g</li>
                        <li>Fiber: 1.6 g per 100g</li>
                    </ul>
                    <div className="text-2xl font-semibold mb-4">Health Benefits</div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Mangoes are not only delicious but also boast a range of health benefits. They are rich in vitamins, minerals, and antioxidants, which can contribute to improved immunity, better digestion, eye health, and a lower risk of certain cancers.
                    </p>
                </div>
            </section>
        </div>
    )
}
