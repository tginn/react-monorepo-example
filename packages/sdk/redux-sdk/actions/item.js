import { ADD_ITEM } from '../actionTypes';

const addItem = item => (
    {
        type: ADD_ITEM,
        payload: {
            item
        }
    }
);

export {
    addItem
}
