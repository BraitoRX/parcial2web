import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

const CafeList = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCafes();
  }, []);

  const getCafes = async () => {
    try {
      const response = await fetch("http://localhost:3001/cafes");
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
      navigate("/cafes/" + id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Nombre" />
            </th>

            <th scope="col">
              {" "}
              <FormattedMessage id="Tipo" />
            </th>
            <th scope="col">
              <FormattedMessage id="Region" />
            </th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((cafe) => (
            <tr
              key={cafe.id}
              onClick={() => handleCafeClick(cafe.id)}
              className={
                selectedCafe && selectedCafe.id === cafe.id
                  ? "table-active"
                  : ""
              }
              style={{ cursor: "pointer" }}
            >
              <th scope="row">{cafe.id}</th>
              <td>{cafe.nombre}</td>
              <td>{cafe.tipo}</td>
              <td>{cafe.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CafeList;
