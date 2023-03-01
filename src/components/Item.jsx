import { useNavigate } from "react-router-dom";

const Item = (props) => {
    const navigate = useNavigate();
    return(
    <li onClick={()=>{navigate(`/products/detail/${props.product.id}`, {state:props.product})}} className="w-2/3 md:w-1/3 h-1/3 p-4 rounded-md border-2 flex flex-col gap-2 shadow-md shadow-gray-600 cursor-pointer"> 
        <img className="bg-gray-200 rounded-md" loading="lazy" src={props.product.images[0]} alt="" />
        <div className="flex items-baseline justify-between">
        <h3 className="text-sm">{props.product.title}</h3>
        <span className="text-gray-600 text-lg">${props.product.price}</span>
        </div>
        <p className="text-xs text-gray-400">{props.product.description}</p>
        <button className="p-2 bg-orange-400 rounded-md hover:bg-green-500 transition-colors">Add to your cart</button>
    </li>
    )
}
export {Item};