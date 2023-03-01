import { useEffect, useState } from "react";
import { Item } from "./Item";
import { useNavigate, useParams } from "react-router-dom";
const FilteredCategory = () => {
    const {id} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}&offset=0&limit=10`)
        .then(result=> result.json())
        .then(result => setFilteredProducts(result))
    },[])
    const navigate = useNavigate();
    return(
        <div className="flex flex-wrap gap-2 justify-center items-center py-4 relative">
            <button className=" bg-orange-400 shadow-gray-600 shadow-md rounded-full w-10 h-10 absolute top-2 left-12 text-2xl" 
                onClick={()=>{navigate(-1)}}>
                <i className="fi fi-rr-arrow-small-left flex justify-center"></i>
            </button>
            {filteredProducts && filteredProducts.map(el =>
                <Item key={el.id} product={el}/>
            )}
        </div>
    )
}
export{FilteredCategory};