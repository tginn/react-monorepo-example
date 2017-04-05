import React, { PropTypes } from 'react';
import ItemAdder from '../ItemAdder';
import ItemList from '../ItemList';

import './ListApp.scss';

const ListApp = props => (
    <div className="ListApp">
        <ItemAdder/>
        <ItemList/>
    </div>
);

export default ListApp;