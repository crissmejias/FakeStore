import { useEffect, useState } from "react";
import { Option } from "./Option";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
const Categories = () => {
   const [categories, setCategories] = useCategories();
    const navigate = useNavigate();
    return(
        <div className="bg-gray-100 relative flex flex-col gap-12 pt-12">
        <button className=" bg-orange-400 shadow-gray-600 shadow-md rounded-full w-10 h-10 absolute top-2 left-12 text-2xl" onClick={()=>{navigate(-1)}}><i className="fi fi-rr-arrow-small-left flex justify-center"></i></button>
            <h2 className="text-4xl font-semibold text-center">Categories</h2>
            <ul className="flex mx-auto flex-col md:flex-row  flex-wrap justify-center items-center gap-8">
            {categories && categories.map(el => <Option key={el.id} category={el}/>)}
            </ul>
        </div>  
    )

}
export {Categories};