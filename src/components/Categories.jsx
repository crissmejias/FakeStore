import { useEffect, useState } from "react";
import { Option } from "./Option";
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5')
        .then(result => result.json())
        .then(result => setCategories(result))
    },[])
    return(
        <div className="bg-gray-200 py-8">
            <h2 className="text-3xl text-center py-8">Categories</h2>
            <ul className="flex w-11/12 mx-auto  flex-wrap justify-center  items-center gap-8">
            {categories && categories.map(el => <Option key={el.id} category={el}/>)}
            </ul>
        </div>  
    )

}
export {Categories};