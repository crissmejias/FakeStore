import {createContext, useContext, useState} from 'react';
const FilterContext = createContext();
const FilterProvider = ({children}) => {

    const [filters, setFilters] = useState({title: '', categoryId: '', price_min: '', price_max: ''});

    const values = {filters, setFilters}
    return(
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}

export{FilterContext, FilterProvider}