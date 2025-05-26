# Pre-Entrega-MaicolPerez
Pre entrega Proyecto de React TalentoTech

🛒 Naruto Shop
Una tienda online de personajes del anime Naruto, desarrollada con React. Esta aplicación simula una e-commerce donde los usuarios pueden explorar personajes, agregarlos al carrito, iniciar sesión y navegar por diferentes secciones de la tienda.

🌐 Demo
🔗 Ver demo en vivo (opcional)

⚙️ Tecnologías Utilizadas
⚛️ React – Librería principal para construir la interfaz.
🚦 React Router DOM – Navegación entre rutas.
🎨 React Bootstrap – Componentes UI con diseño responsive.
💾 LocalStorage – Para autenticación y persistencia del carrito.
☁️ API Pública de Naruto – Para obtener los personajes.
📂 Estructura del Proyecto
src/
│
├── components/         # Header, Footer, Login, etc.
├── pages/              # Productos, Carrito, Contacto, Galería, Perfil, etc.
├── context/            # CarritoContext para global state
├── routes/             # Rutas protegidas
├── App.jsx             # Estructura principal de la app
└── main.jsx            # Punto de entrada

🔐 Funcionalidades
✅ Autenticación de usuarios (simulada con LocalStorage)
✅ Rutas protegidas (por ejemplo, /perfil y /admin)
✅ Carrito de compras con contador e ícono visible
✅ Mensaje de confirmación global al agregar productos
✅ Diseño responsivo y amigable
✅ Paginación para los productos
✅ Limpieza del carrito y sesión al cerrar sesión

🧠 Aprendizajes

-- Este proyecto me permitió practicar:
-- React con rutas protegidas y contexto global.
-- Manejo del estado global con useContext.
-- Consumo de una API pública.
-- Estilizado con React Bootstrap.
-- Control de flujo de navegación con React Router.

📌 Pendientes o mejoras futuras

-- Backend real para autenticación.
-- Sistema de pagos simulado o real.
-- Filtro por categorías o habilidades.
-- Mejora de rendimiento con lazy loading y skeletons.

👤 Autor

Maicol Perez
