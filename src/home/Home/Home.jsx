import React from 'react'
import Banner from './Banner'
import AllProduct from './AllProduct'
import Featured from './Featured'
import Review from './Review'
import { useLoaderData } from 'react-router-dom'
import Delivary from './Delivary'
import WhyWeAreBest from './WhyWeAreBest'

export default function Home() {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllProduct products={products}></AllProduct>
            <Featured></Featured>
            <Delivary></Delivary>
            <WhyWeAreBest></WhyWeAreBest>
            <Review></Review>
        </div>
    )
}
