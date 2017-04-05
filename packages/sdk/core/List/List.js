import React, { PropTypes } from 'react';

import './List.scss';

const List = props => {
    return (
        <div className={`List ${props.className}`}>
            <ul className="List__list">{props.children}</ul>
        </div>
    );
};

List.propTypes = {
    className: PropTypes.string
};

export default List;
