import React, { useEffect, useState, useContext } from 'react';
import { Row, Col ,Form,Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { agregarAlCarrito } = useContext(CartContext);
 
  useEffect(() => {
    let url = 'https://68489b9bec44b9f349416b0e.mockapi.io/api/productos';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }



  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

 const handleFilter = () => {
    let filtered = products;

    if (minPrice !== '') {
      filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(filtered);
  };

  // Botón para limpiar filtros
  const handleClear = () => {
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

 return (
    <>
    
      <Form className="mb-4">
        <Row className="align-items-end">
          <Col md={3}>
            <Form.Label>Minimo </Form.Label>
            <Form.Control
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Ej: 10"
            />
          </Col>
          <Col md={3}>
            <Form.Label>Maximo</Form.Label>
            <Form.Control
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
          
            />
          </Col>
          <Col md="auto">
            <Button variant="primary" onClick={handleFilter}>
              Filtrar
            </Button>
          </Col>
          <Col md="auto">
            <Button variant="secondary" onClick={handleClear}>
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>

   

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductCard
                product={product}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Col>
          ))
        ) : (
          <div>No hay productos en este rango de precios.</div>
        )}
      </Row>
    </>
  );
};

export default ProductList;