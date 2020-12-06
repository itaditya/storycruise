import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import StoryCruise from './storycruise/StoryCruise.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <StoryCruise />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
