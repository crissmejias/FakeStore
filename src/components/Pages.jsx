
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
const Pages = ({page, setPage}) =>{
    const {pageId} = useParams();
    const navigate = useNavigate();
    const pages = [2,3,4,5,6,7,8,9,10];
    
    const handleClick = (e) => {
        if(e.target.innerText == '1'){
            setPage('')
        }else{
            let newPage = e.target.innerText + 0;
            setPage(newPage)
        }
    }
    const movePageUp = (e) => {
        if(pageId){
            let newPage = parseInt(pageId) + 10
            setPage(newPage);
            navigate(`/products/${newPage}`)
        }else{
            setPage('20')
            navigate('/products/20');
        }
    }
    const movePageDown = (e) => {
        if(pageId === '20'){
            setPage('')
            navigate('/')
        }
        if(pageId !== '20'){
            let newPage = parseInt(pageId) - 10;
            setPage(newPage);
            navigate(`/products/${newPage}`)
        } 
    }
    return(
        <div className="mx-auto text-xl pt-12  flex items-center gap-4">
        {pageId > 10 &&   <button onClick={movePageDown} ><i className="fi fi-rr-angle-circle-left hover:bg-orange-400 hover:text-gray-900 flex rounded-full text-center"></i></button>
}           <NavLink to='/' key={1} className={`page rounded-full text-center border-2 h-6 w-6 text-sm`} onClick={handleClick}>1</NavLink>
           { pages.map(el =>
           <NavLink to={`/products/${el}0`} key={el} className={`page rounded-full text-center border-2 h-6 w-6 text-sm`} onClick={handleClick}>{el}</NavLink>
           )}
         { (pageId < 100 || !pageId) &&   <button onClick={movePageUp} ><i className="fi fi-rr-angle-circle-right hover:bg-orange-400 hover:text-gray-900 flex  items-center rounded-full text-center"></i></button>
}        
        </div>
    )
}
export {Pages};