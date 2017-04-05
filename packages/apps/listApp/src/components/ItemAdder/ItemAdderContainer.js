import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '@example/redux-sdk/actions/item';
import ItemAdder from './ItemAdder';

const mapDispatchToProps = (dispatch) => (
    {
        addItem: item => dispatch( addItem(item) )
    }
);

const ItemAdderContainer = connect(undefined, mapDispatchToProps)(ItemAdder);

export default ItemAdderContainer;

