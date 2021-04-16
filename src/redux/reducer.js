import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactsSuccess,
    addContactSuccess,
    deleteContactSuccess,
    changeFilter
} from './actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => {
        const isInList = state.find(
                newContact => newContact.name.toLowerCase() === payload.name.toLowerCase()
            );
            if (isInList) {
                alert(`Contact ${payload.name} is already exist`);
                return state;
            }
            return [...state, payload];
    },
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', { [changeFilter]: (_, { payload }) => payload });

export default combineReducers({
    items,
    filter,
});