import * as actionType from './actionType';
export const updateOrderBy = (orderBy) => {
    return {
        type: actionType.UPDATE_ORDERBY,
        data: orderBy
    }
}

