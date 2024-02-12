import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Contador from './componentes/Contador/Contador';
import Item from './componentes/Item/Item';
import Error from './componentes/Error/Error';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>

      <BrowserRouter>
      <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer saludo={"Bienvenidos a mi E-commers"}/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}
export default App
