import { useEffect, useState } from "react"
import {Item} from './Item'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products?offset=20&limit=10')
        .then(result => result.json())
        .then(result => setProducts(result))
    },[])
    return(
        <main className="bg-gray-100 h-full flex flex-col justify-center">
            <h1 className="py-4 text-3xl text-center font-semibold">Listado de Productos</h1>
            <ul className="flex gap-5 flex-wrap justify-center items-center w-full">
            {products && products.map( el => <Item key={el.id} product={el}/>)}
            </ul>
        </main>
    )
}
export {Products}