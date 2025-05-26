import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Contacto from './pages/Contacto';
import Perfil from './pages/Perfil';
import Productos from './components/Productos';
import Administracion from './pages/Administracion';
import RutaProtegida from './components/RutaProtegida';
import NarutoShop from './components/NarutoShop';
import Carrito from './pages/Carrito';
import { CarritoProvider, CarritoContext } from './context/CarritoContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppContent() {
  const { mensaje } = useContext(CarritoContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {mensaje && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999,
          minWidth: '280px',
        }}>
          <Alert variant="success" className="shadow-sm text-center fw-semibold mb-0">
            {mensaje}
          </Alert>
        </div>
      )}

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/naruto" element={<NarutoShop />} />
          <Route path="/perfil/:id" element={<RutaProtegida><Perfil /></RutaProtegida>} />
          <Route path="/admin" element={<RutaProtegida><Administracion /></RutaProtegida>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;