import React, { useState, useEffect } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import CafeDetail from '../cafeComponent/cafeDetail';

const CafeList = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    getCafes();
  }, []);

  const getCafes = async () => {
    try {
      const response = await fetch('http://localhost:3001/cafes');
      const data = await response.json();
      setCafes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCafeClick = async (id) => {
    if (selectedCafe && selectedCafe.id === id) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/cafes/${id}`);
      const data = await response.json();
      setSelectedCafe(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Café List</h2>
      <div className="row">
        <div className="col-6">
          <ListGroup>
            {cafes.map((cafe) => (
              <ListGroup.Item
                key={cafe.id}
                onClick={() => handleCafeClick(cafe.id)}
                active={selectedCafe && selectedCafe.id === cafe.id}
                style={{ cursor: 'pointer' }}
              >
                <Row>
                  <Col>
                    <h4>{cafe.nombre}</h4>
                    <p>Tipo: {cafe.tipo}</p>
                    <p>Región: {cafe.region}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-6">
          {selectedCafe && <CafeDetail cafeId={selectedCafe.id} />}
        </div>
      </div>
    </div>
  );
};

export default CafeList;
