import {useState, useEffect} from 'react';
const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('');
    useEffect(()=> {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
        .then(result => result.json())
        .then(result => setProducts(result))
    },[page])
    return {products, page, setPage}
}
export {useProducts}