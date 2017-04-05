import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '@example/redux-sdk';
import Item from '@example/item';

const store = createStore(reducers);

const components = {
    Item
};

const render = (node, name, props) => {
    const Component = components[name];

    ReactDOM.render(
        <Provider store={store}>
            <Component {...props}/>
        </Provider>,
        node
    );
};

export {
    render
}