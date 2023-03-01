import { Header } from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import {Products} from './components/Products'
import {Categories} from './components/Categories'
import { FilteredCategory } from "./components/FilteredCategory"

function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<FilteredCategory/>}/>
      </Routes>
    </>
    )
}

export default App
