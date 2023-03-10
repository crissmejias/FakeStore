import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cart";
const ProductDetail = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {addProduct} = useContext(CartContext);
    return(
        <div className=" bg-gray-100 relative  flex flex-col gap-4 h-screen justify-center items-center">
            <button className=" bg-orange-400 shadow-gray-600 shadow-md rounded-full w-10 h-10 absolute top-10 left-12 text-2xl" onClick={()=>{navigate(-1)}}><i className="fi fi-rr-arrow-small-left flex justify-center"></i></button>
            <img src={state.images[1]} className=" w-8/12 max-w-screen-sm h-1/2 max-h-sm  object-scale-down shadow-gray-600 shadow-md rounded-md"/>
            <div className=" px-2 flex justify-around flex-col max-w-screen-sm text-xl w-8/12 gap-2">
            <span onClick={()=>{navigate(`/categories/${state.category.id}`)}} className="cursor-pointer border-2 p-2 w-fit rounded-md text-sm font-bold bg-red-500 text-center inline-block">{state.category.name}</span>
            <h2>{state.title}</h2>
            <span>${state.price}</span>
            </div>
            <p className="text-xs max-w-screen-sm  font-light italic w-8/12">{state.description}</p>
            <button onClick={()=>{addProduct(state)}} className="p-2 bg-orange-400 rounded-md w-8/12 shadow-gray-600 shadow-md max-w-screen-sm">Add to cart</button>
        </div>
    )

}
export {ProductDetail};