import React from 'react'

export default function Delivary() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Delivery Process</h2>
                    <p className="mt-4 text-lg text-gray-600">Here's how we ensure your mangoes are delivered fresh and on time.</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col h-full">
                            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Order Placement</h3>
                            <p className="text-gray-600 flex-grow">Place your order through our website and choose your preferred delivery date and time.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col h-full">
                            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16l4-4 4 4m0-6l-4-4-4 4"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Order Processing</h3>
                            <p className="text-gray-600 flex-grow">Our team carefully picks and packs your mangoes, ensuring they are fresh and of the highest quality.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 flex">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col h-full">
                            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Delivery</h3>
                            <p className="text-gray-600 flex-grow">Your order is delivered to your doorstep, on time, and with care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
