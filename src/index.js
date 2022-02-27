import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import { LikesContextProvider } from './store/likes-context';

ReactDOM.render(
  <LikesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LikesContextProvider>,
  document.getElementById('root')
);
