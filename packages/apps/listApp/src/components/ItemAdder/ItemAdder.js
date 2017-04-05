import React, { Component, PropTypes } from 'react';
import Input from '@example/core/Input';
import Button from '@example/core/Button';
import _ from 'underscore';

import './ItemAdder.scss';

class ItemAdder extends Component {
    static propTypes = {
        addItem: PropTypes.func
    };

    render(){
        return (
            <div className="ItemAdder">
                <Input onChange={this.onNewItemChange}/>
                <Button onClick={this.onAddItemClick}>add item</Button>
            </div>
        );
    }

    constructor(props){
        super(props);

        this.state = {
            newItem: ""
        };
    }
    
    onNewItemChange = (evt) => {
        this.setState({
            newItem: evt.target.value
        });
    };
    
    onAddItemClick = (evt) => {
        const self = this;
        const { addItem } = self.props;
        
        evt.preventDefault();
        setTimeout(function(){
            addItem({
                id: _.uniqueId('item'),
                name: self.state.newItem
            });
        }, 0);
    };
}

export default ItemAdder;