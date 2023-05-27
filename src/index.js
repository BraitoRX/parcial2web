import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import messages_en from './locales/en.json';
import messages_es from './locales/es.json';

const AppWrapper = () => {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]); // Obtén el idioma del navegador

  useEffect(() => {
    const handleLanguageChange = () => {
      setLocale(navigator.language.split(/[-_]/)[0]);
    };
    
    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  const messages = {
    en: messages_en,
    es: messages_es,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IntlProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// Resto del código...

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
