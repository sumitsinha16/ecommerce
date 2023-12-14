import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop'; // Import Shop component
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory component
import Product from './Pages/Product'; // Import Product component
import Cart from './Pages/Cart'; // Import Cart component
import LoginSignup from './Pages/LoginSignup'; // Import LoginSignup component
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path='/product' element={<Product />}/>
        <Route path=':productId' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
