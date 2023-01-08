import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
document.getElementById('root'));