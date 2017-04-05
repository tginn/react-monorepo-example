import { combineReducers } from 'redux';
import { ADD_ITEM } from '../actionTypes';
import _ from 'underscore';

const items = (state = {}, action) => {
    switch(action.type){
        case ADD_ITEM:
            let items = {};
            items[action.payload.item.id] = action.payload.item;
            return Object.assign({}, state, items);
        default:
            return state;
    }
};

export default combineReducers({
    items
});
