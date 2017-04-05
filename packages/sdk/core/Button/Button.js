import React, { PropTypes } from 'react';

import './Button.scss';

const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.propTypes = {
    onClick: PropTypes.func
};

export default Button;
