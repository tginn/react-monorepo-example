import React from 'react';

import './Useless.scss';

// This component should never get included in a bundle
const Useless = props => {
    return <div className="Useless"></div>;
};

export default Useless;