import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
   , document.getElementById('root'));

serviceWorker.unregister();
