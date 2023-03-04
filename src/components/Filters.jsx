import { useContext, useRef, useState } from "react"
import { FilterContext } from "../context/filters";

const Filters = (props) => {
   const sideBarRef = useRef(null);
   const buttonRef = useRef(null);
   const handleClick = () => {
    sideBarRef.current.classList.toggle('sidebar');
    sideBarRef.current.classList.toggle('sidebar-hide');
    buttonRef.current.classList.toggle('button-hide')
    buttonRef.current.classList.toggle('button');
}
    const {filters, setFilters} = useContext(FilterContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilters({...filters, title:e.target[0].value, price_min: e.target[2].value, price_max: e.target[3].value})
    }
    return(
        <>
            <button ref={buttonRef} type="button" onClick={handleClick} className={` bg-orange-400 button-hide p-2 rounded-tr-md absolute top-20 rounded-br-md`}>{"« Filters"}</button>
        <div ref={sideBarRef}  className={`absolute top-20 h-screen flex justify-around sidebar-hide`}>
            <aside  className={`bg-gray-200 w-[300px] absolute  p-5 h-11/12 rounded-br-md`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center h-2/3" >
                    <label htmlFor="" className="text-center">Title</label><input type="text" name="title" placeholder="try: Generic, Awesome..." className="rounded-md p-2" />
                    <label htmlFor="" className="text-center">Category</label><input type="text" name='categories' placeholder="try: Clothes, Electronics..." className="rounded-md p-2"/>
                    <div className="flex flex-col my-2 gap-4">
                    <h3 htmlFor="" className="text-center">Price</h3>
                    <input type="number" name='price_min' className="rounded-md p-2" placeholder="Min" />
                    <input type="number" placeholder="Max" name="price_max" className="rounded-md p-2"/>
                    </div>
                    <button className="bg-orange-400 mt-2 rounded-md py-2">Filter Products!</button>
                </form>
            </aside>
        </div>
        </>
    )
}
export{Filters}