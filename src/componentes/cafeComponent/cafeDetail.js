import React, { useState, useEffect } from "react";
import "./cafe.css";
import { FormattedMessage, useIntl } from "react-intl";

const CafeDetail = ({ cafeId }) => {
  const [cafe, setCafe] = useState(null);
  const intl = useIntl();

  useEffect(() => {
    const getCafe = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cafes/${cafeId}`);
        const data = await response.json();
        setCafe(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCafe();
  }, [cafeId]);

  if (!cafe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cafe-card d-flex justify-content-center">
      <div className="cafe-content">
        <h2 className="title1">{cafe.nombre}</h2>
        <p className="cafe-fecha-cultivo">
          <FormattedMessage id="Cultivado" />{" "}
          {intl.formatDate(cafe.fecha_cultivo, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="cafe-image-container">
          <img className="cafe-image" src={cafe.imagen} alt={cafe.nombre} />
        </div>
        <p className="cafe-notas">
          <FormattedMessage id="Notas" /> {cafe.notas}
        </p>
        <p className="title2">
          <FormattedMessage id="Cultivado..." /> {cafe.altura}{" "}
          <FormattedMessage id="msnm" />
        </p>
      </div>
    </div>
  );
};

export default CafeDetail;
