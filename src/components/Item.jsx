import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart";
const Item = (props) => {
    const {addProduct} = useContext(CartContext);
    const navigate = useNavigate();
    return(
    <li onClick={(e)=>{e.target.id !== 'add' ? navigate(`/products/detail/${props.product.id}`, {state:props.product}): null}} className="bg-gray-100 w-2/3 md:w-1/3 h-1/3 p-4 rounded-md border-2 flex flex-col gap-2 shadow-md shadow-gray-600 cursor-pointer"> 
        <img className="bg-gray-100 rounded-md" loading="lazy" src={props.product.images[0]} alt="" />
        <div className="flex flex-col items-baseline justify-between">
        <h3 className="text-lg">{props.product.title}</h3>
        <span className="text-gray-600 text-lg">${props.product.price}</span>
        </div>
        <p className="text-xs text-gray-400">{props.product.description}</p>
        <button onClick={()=>{addProduct(props.product)}}  id="add" className="p-2 bg-orange-400 rounded-md hover:bg-green-500 transition-colors">Add to your cart</button>
    </li>
    )
}
export {Item};