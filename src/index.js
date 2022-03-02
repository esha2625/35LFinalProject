import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
import { LikesContextProvider } from './store/likes-context';

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const firebaseConfig = {
  apiKey: "AIzaSyDFrqpbtJODbymMwRsP4xTJduuas1UMMUk",
  authDomain: "bruinfessions-e55f6.firebaseapp.com",
  databaseURL: "https://bruinfessions-e55f6-default-rtdb.firebaseio.com",
  projectId: "bruinfessions-e55f6",
  storageBucket: "bruinfessions-e55f6.appspot.com",
  messagingSenderId: "215295177115",
  appId: "1:215295177115:web:566792c3641e84e8b3313e",
  measurementId: "G-6GTHX36MWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);