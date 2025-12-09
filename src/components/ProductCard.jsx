import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (

    // Armo la cards
    <Card className="h-60 d-flex flex-column p-2 bg-dark">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid" 
        style={{ 
          height: '220px', 
          //objectFit: 'contain', // ajusta sin recortar
          //objectFit: 'cover', 
          objectPosition: 'center', // centra la imagen
        }} 
      />

      <Card.Body className="d-flex flex-column text-white">
        <Card.Title className='fs-5'><strong>{product.title}</strong></Card.Title>
        <Card.Text className='fs-6'>
          {product.description.slice(0, 30)}...
        </Card.Text>
        <Card.Text className='fs-5'>
          <strong>Precio: ${product.price}</strong>
        </Card.Text>
        <Card.Text className='fs-6'>
          Rubro: {product.rubro}
        </Card.Text>
        <Button variant="primary" onClick={() => agregarAlCarrito(product)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;