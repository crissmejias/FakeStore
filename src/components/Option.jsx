import { NavLink } from "react-router-dom";

const Option = (props) =>{
    return(
        <NavLink to={`/categories/${props.category.id}`} className="relative w-1/2 md:w-1/3 bg-gray-800 rounded-lg group transition duration-300 cursor-pointer">
            <img src={props.category.image} loading="lazy" className="group-hover:mix-blend-soft-light" alt="" />
            <h2 loading='lazy' className="absolute top-[60%] left-[10%] text-3xl text-gray-400">
            {props.category.name}
            </h2>
        </NavLink>
    )
}
export {Option};