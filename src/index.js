import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode
// StrictMode renders components twice (on dev but not production)
// in order to detect any problems with your code
// and warn you about them (which can be quite useful).

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
