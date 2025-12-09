import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Infaltables from './components/Infaltables';
import Login from './components/Login'; 
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';
import Alban from './components/Alban';
import Electricidad from './components/Electricidad';
import ConstSeco from './components/ConstSeco';
import Acero from './components/Acero';

function App() {

  return (
      <CartProvider>
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/infaltables" element={<Infaltables />} />
        <Route path="/alban" element={<Alban />} />
        <Route path="/acero" element={<Acero />} />
        <Route path="/constSeco" element={<ConstSeco />} />
        <Route path="/electricidad" element={<Electricidad />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  )
}

export default App