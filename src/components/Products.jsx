import { useEffect, useState } from "react"
import {Item} from './Item'
import { Pages } from "./Pages";
import { useParams } from "react-router-dom";
import {useProducts} from '../hooks/useProducts'
const Products = () => {
    const {products, page, setPage} = useProducts();
    return(
        <main className="bg-gray-100 h-full flex flex-col justify-center">
            <h1 className="py-4 text-3xl text-center font-semibold">Products List</h1>
            <ul className="flex flex-col md:flex-row gap-5 flex-wrap justify-center items-center w-full">
            {products && products.map( el => <Item key={el.id} product={el}/>)}
            </ul>
            <Pages page={page} setPage={setPage}/>
        </main>
    )
}
export {Products}