import * as types from '../constants/ActionTypes';

export function setPage(page) {
    return {
        type: types.SET_PAGE,
        page
    }
}