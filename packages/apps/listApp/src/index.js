import React from 'react';
import ReactDOM from 'react-dom';
import { ListApp } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const storeCreator = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;
const store = storeCreator(reducers);

ReactDOM.render(
    (
        <Provider store={store}>
            <ListApp/>
        </Provider>
    ),
    document.getElementById('root')
);
