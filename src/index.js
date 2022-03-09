import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
import { LikesContextProvider } from './store/likes-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <LikesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LikesContextProvider>
  </FavoritesContextProvider>,
  document.getElementById('root')
);