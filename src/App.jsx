import { Header } from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import {Products} from './components/Products'
import {Categories} from './components/Categories'
import { FilteredCategory } from "./components/FilteredCategory"
import { ProductDetail } from "./components/ProductDetail"
import { Footer } from "./components/Footer"
import {Filters} from './components/Filters'
import { useState } from "react"
function App() {
  const [position, setPosition]  = useState(false)
  const showFilters = () => {
    setPosition(prev => !prev)
  }
  return (
    <>
      <Header/> 
     
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:pageId' element={<Products/>}/>
        <Route path='/products/detail/:productId' element={<ProductDetail/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<FilteredCategory/>}/>
        <Route path='/categories/:id/:categoryPage' element={<FilteredCategory/>}/>
      </Routes>
      <Footer/>
    </>
    )
}

export default App
