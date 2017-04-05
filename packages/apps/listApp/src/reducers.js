import { combineReducers } from 'redux';
import { reducers, actionTypes } from '@example/redux-sdk';

const appItems = (state = [], action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return [].concat(state, action.payload.item.id);
        default:
            return state;
    }
};

export default combineReducers({
    appItems,
    ...reducers
});
