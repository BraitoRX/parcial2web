import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./login.css";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        navigate("/cafes");
      } else {
        setError(
          <FormattedMessage id="ErrorAutenticacion" defaultMessage="Error de autenticación. Revise sus credenciales." />
        );
      }
    } catch (error) {
      setError(
        <FormattedMessage id="ErrorRed" defaultMessage="Error de red. Verifica tu conexión." />
      );
      console.error(error);
    }
  };

  return (
    <div className="login-card">
      <div className="login-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="login">
              <FormattedMessage id="NombreUsuario" defaultMessage="Nombre de usuario:" />
            </label>
            <input
              className="input"
              type="text"
              id="login"
              value={login}
              onChange={handleLoginChange}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              <FormattedMessage id="Contraseña" defaultMessage="Contraseña:" />
            </label>
            <input
              className="input"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-group">
            <button className="submit-button" type="submit">
              <FormattedMessage id="Ingresar" defaultMessage="Ingresar" />
            </button>
            <button className="cancel-button" type="button">
              <FormattedMessage id="Cancelar" defaultMessage="Cancelar" />
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
