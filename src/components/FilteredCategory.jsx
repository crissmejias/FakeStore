import { useEffect, useState } from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
const FilteredCategory = () => {
    const {id} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}&offset=0&limit=10`)
        .then(result=> result.json())
        .then(result => setFilteredProducts(result))
    },[])
    return(
        <div className="flex flex-wrap gap-2 justify-center items-center py-4">
            {filteredProducts && filteredProducts.map(el =>
                <Item key={el.id} product={el}/>
            )}
        </div>
    )
}
export{FilteredCategory};