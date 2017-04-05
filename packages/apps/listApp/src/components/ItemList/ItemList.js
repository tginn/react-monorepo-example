import React, { Component, PropTypes } from 'react';
import Item from '@example/item';
import List from '@example/core/List';

import './ItemList.scss';

const ItemList = props => {
    const items = props.items.map( itemId => (<li key={itemId}><Item itemId={itemId}/></li>) );

    return (
        <div className="ItemList">
            <List heading="Items">{items}</List>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

export default ItemList;