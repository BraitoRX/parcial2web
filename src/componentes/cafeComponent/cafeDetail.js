import React, { useState, useEffect } from 'react';

const CafeDetail = ({ cafeId }) => {
  const [cafe, setCafe] = useState(null);

  useEffect(() => {
    getCafe();
  }, []);

  const getCafe = async () => {
    try {
      const response = await fetch(`http://localhost:3001/cafes/${cafeId}`);
      const data = await response.json();
      setCafe(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!cafe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{cafe.nombre}</h2>
      <p>Tipo: {cafe.tipo}</p>
      <p>Región: {cafe.region}</p>
      <p>Notas: {cafe.notas}</p>
      <p>Fecha de cultivo: {cafe.fecha_cultivo}</p>
      <p>Altura: {cafe.altura}</p>
      <img src={cafe.imagen} alt={cafe.nombre} style={{ maxWidth: '200px' }} />
    </div>
  );
};

export default CafeDetail;
