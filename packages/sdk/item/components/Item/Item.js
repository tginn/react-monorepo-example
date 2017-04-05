import React, { PropTypes } from 'react';
import Text from '@example/core/Text';

import './Item.scss';

const Item = props => {
    return (
        <div className="Item">
            <Text>{props.item.name}</Text>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
};

export default Item;