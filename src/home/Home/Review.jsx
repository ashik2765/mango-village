import React from 'react'

export default function Review() {
    const reviews = [
        {
            id: 1,
            name: 'Jane Doe',
            rating: 5,
            comment: 'Absolutely delicious mangoes! They were fresh, juicy, and arrived on time. Highly recommend!',
            image: 'path/to/jane.jpg'
        },
        {
            id: 2,
            name: 'John Smith',
            rating: 4,
            comment: 'Great quality and flavor. The packaging was also very good. Will order again.',
            image: 'path/to/john.jpg'
        },
        {
            id: 3,
            name: 'Emily Johnson',
            rating: 5,
            comment: 'The best mangoes I have ever tasted! They were sweet and perfect for making smoothies.',
            image: 'path/to/emily.jpg'
        }
    ];
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Customer Reviews
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-yellow-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="h-24 w-24 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{review.name}</h3>
                        <div className="flex justify-center mb-2">
                            {[...Array(5)].map((star, i) => (
                                <svg
                                    key={i}
                                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.5 4.63 4.9.362c.962.071 1.356 1.254.654 1.86l-3.684 3.154 1.1 4.748c.218.944-.791 1.686-1.63 1.15L10 15.347l-4.291 2.484c-.84.536-1.848-.206-1.63-1.15l1.1-4.748L1.495 9.779c-.702-.606-.308-1.789.654-1.86l4.9-.362 1.5-4.63z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
