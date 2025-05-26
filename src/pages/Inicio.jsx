import { Container, Button, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">Bienvenido a Nuestra Tienda</h1>
        <p className="lead text-muted">Explora nuestra colección de personajes y encuentra tu favorito.</p>
        <Button
          variant="warning"
          size="lg"
          className="mt-3 fw-semibold"
          onClick={() => navigate('/productos')}
        >
          🛍️ Ver Productos
        </Button>
      </div>

      {/* Carrusel de imágenes */}
 <Carousel className="mb-5 rounded-4 overflow-hidden shadow">
  {[
    { src: '/img/naruto.jpg', alt: 'Naruto' },
    { src: '/img/sasuke.jpg', alt: 'Sasuke' },
    { src: '/img/equipo7.jpg', alt: 'Equipo 7' }
  ].map((item, index) => (
    <Carousel.Item key={index} className="text-center">
      <img
        className="d-inline-block"
        src={item.src}
        alt={item.alt}
        style={{
          maxHeight: '400px',
          width: '100%',
          objectFit: 'contain',
          backgroundColor: 'transparent',  // Aquí quitas el fondo negro
        }}
      />
    </Carousel.Item>
  ))}
</Carousel>

      {/* Beneficios */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold text-primary">Productos Únicos</h5>
              <p className="text-muted">
                Colección exclusiva de personajes del universo Naruto y más.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold text-primary">Pago Seguro</h5>
              <p className="text-muted">
                Tus datos están protegidos y puedes comprar con total confianza.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold text-primary">Envíos Rápidos</h5>
              <p className="text-muted">
                Recibe tus productos en tiempo récord directamente en tu hogar.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
