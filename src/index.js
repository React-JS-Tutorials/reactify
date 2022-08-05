import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
const middleware = [thunk];

const store = configureStore({reducer:rootReducer}, composeWithDevTools(applyMiddleware(...middleware)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
          <React.StrictMode>
            <Provider store = {store} >
                <App />
            </Provider>
          </React.StrictMode>
        </Router>
);

