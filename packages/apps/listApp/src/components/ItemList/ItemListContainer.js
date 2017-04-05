import React from 'react';
import { connect } from 'react-redux';
import { selectAppItems } from '../../selectors';
import ItemList from './ItemList';

const mapStateToProps = (state) => ({
    items: selectAppItems(state)
});

const ItemListContainer = connect(mapStateToProps)(ItemList);

export default ItemListContainer;

