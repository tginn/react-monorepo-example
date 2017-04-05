import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { selectItem } from '@example/redux-sdk/selectors/item';

const mapStateToProps = (state, ownProps) => {
    return {
        item: selectItem(state, ownProps.itemId)
    };
};

const ItemContainer = connect(mapStateToProps)(Item);

ItemContainer.propTypes = {
    itemId: PropTypes.string
};

export default ItemContainer;