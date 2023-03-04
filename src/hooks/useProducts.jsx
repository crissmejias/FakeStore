import {useState, useEffect, useContext} from 'react';
import { FilterContext } from '../context/filters';
const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('');
    const {filters} = useContext(FilterContext);
    useEffect(()=> {
        setLoading(true)
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10&categoryId=${filters.categoryId}&title=${filters.title}&price_min=${filters.price_min}&price_max=${filters.price_max}`)
        .then(result => result.json())
        .then(result => setProducts(result))
        .then(setLoading(false))
    },[page, filters])
    return {products, page, setPage,loading}
}
export {useProducts}