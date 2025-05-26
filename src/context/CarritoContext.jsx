import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const agregarProducto = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    setMensaje(`✅ ${producto.nombre || producto.name} agregado al carrito.`);
    setTimeout(() => setMensaje(''), 3000);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setMensaje('🗑️ El carrito ha sido vaciado.');
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, vaciarCarrito, mensaje }}>
      {children}
    </CarritoContext.Provider>
  );
};