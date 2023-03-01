import {createContext, useState} from 'react';
const CartContext = createContext();
const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const addProduct = (product) =>{
        setCart(oldData => [...oldData, product])
    }
    const shoppingCart = {cart, addProduct}
    return(
        <CartContext.Provider value={shoppingCart}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}