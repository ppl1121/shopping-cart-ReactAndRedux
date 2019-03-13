import * as actionType from './actionType';
export const updateFilter = (filter) => {
    return {
        type: actionType.UPDATE_FILTER,
        data: filter
    }
}