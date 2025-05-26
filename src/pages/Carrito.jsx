import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Carrito() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const total = carrito.reduce((acc, prod) => acc + (prod.precio || 1200), 0);

  const finalizarCompra = () => {
    // Aquí puedes agregar lógica extra (guardar compra, etc.)
    alert('🎉 Muchas gracias por su compra!');
    vaciarCarrito(); // Vacía el carrito después de la compra
    navigate('/'); // Redirige a la página de productos
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">🛒 Carrito de compras</h3>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="row">
            {carrito.map((producto, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-3">
                <div className="card shadow-sm border-0 rounded-3">
                  <img
                    src={producto.imagen || producto.images?.[0]}
                    alt={producto.nombre || producto.name}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">{producto.nombre || producto.name}</h6>
                    <p className="text-muted">${producto.precio || 1200}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h5>Total: ${total}</h5>
            <div className="d-flex gap-2">
              <Button variant="danger" onClick={vaciarCarrito}>
                🗑️ Vaciar carrito
              </Button>
              <Button variant="success" onClick={finalizarCompra}>
                ✅ Finalizar compra
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
// Este componente muestra el carrito de compras, permite vaciarlo y finalizar la compra.
// Se utiliza el contexto CarritoContext para manejar el estado del carrito y los mensajes.
