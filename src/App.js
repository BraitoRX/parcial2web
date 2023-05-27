import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListadoCafes from "./pages/ListadoCafes";
import CafeDetail from "./componentes/cafeComponent/cafeDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FormattedMessage } from "react-intl";

const CafeDetailWrapper = () => {
  const { id } = useParams();
  return <CafeDetail cafeId={id} />;
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="title-container">
          <h1 className="title">
            <FormattedMessage id="aromaMagico" />
          </h1>
        </div>
        <div className="image-container">
          <img
            src={require("./assets/bannerCafe.png")}
            alt="Banner de Café"
            className="banner-image"
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Routes>
              <Route path="/cafes" element={<ListadoCafes />} />
              <Route path="/cafes/:id" element={<ListadoCafes />} />
            </Routes>
          </div>
          <div className="col-12 col-md-6">
            <Routes>
              <Route path="/cafes/:id" element={<CafeDetailWrapper />} />
            </Routes>
          </div>
        </div>
        <div className="row"></div>
        <div className="login-page-container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
        <div className="contact-info">
          <p>
            <FormattedMessage id="Contactanos" /> +57 3102105253 - info@elaromamagico.com - @elaromamagico
          </p>
        </div>
      </div>
    </Router>
  );
};

export default App;
