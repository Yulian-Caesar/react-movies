import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunk,
];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
));


const app = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'))