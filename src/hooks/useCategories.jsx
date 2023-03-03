import {useState, useEffect} from 'react'
const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5')
        .then(result => result.json())
        .then(result => setCategories(result))
    },[])
    return [categories, setCategories];
}
export {useCategories};