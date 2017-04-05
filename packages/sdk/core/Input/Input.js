import React, { PropTypes } from 'react';

import './Input.scss';

const Input = props => <input onChange={props.onChange}/>;

Input.propTypes = {
    onChange: PropTypes.func
};

export default Input
