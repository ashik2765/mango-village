import ProductCard from './ProductCard';
export default function AllProduct({products}) {
    console.log(products);

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Our Products
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    products.slice(0,4).map(item => <ProductCard key={item._id} mango={item}></ProductCard>)
                }
            </div>
        </div>
    )
}
