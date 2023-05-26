import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

      if (response.ok){
        navigate("/cafes");
      }
      else{
        setError("Error de autenticación. revise sus credenciales.");
      }
    } catch (error) {
      setError("Error de red. Verifica tu conexión.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="login">
            Nombre de usuario:
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
            Contraseña:
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
            Ingresar
          </button>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
      
    </div>
  );
};

export default LoginForm;
