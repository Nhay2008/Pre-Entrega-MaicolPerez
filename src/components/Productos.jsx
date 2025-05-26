import React, { useEffect, useState } from 'react';
import ListaProductos from '../components/ListaProductos';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://naruto-api.gustanobre.com.br/api/v1/characters')
      .then((res) => res.json())
      .then((data) => {
        const productosFormateados = data.map((personaje) => ({
          id: personaje.id,
          nombre: personaje.name,
          imagen: personaje.images?.[0] || 'https://via.placeholder.com/200x300',
          precio: Math.floor(Math.random() * 5000) + 1000,
          sexo: personaje.info?.Sexo || 'Desconocido',
          ocupacion: personaje.info?.Ocupación || 'N/A',
        }));
        setProductos(productosFormateados);
      })
      .catch((error) => {
        console.error('Error al obtener los personajes:', error);
      });
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Nuestros Productos</h2>
      <ListaProductos productos={productos} />
    </div>
  );
}

export default Productos;