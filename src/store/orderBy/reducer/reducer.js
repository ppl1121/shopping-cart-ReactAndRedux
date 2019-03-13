import * as actionType from '../action/actionType'

const initialState = {
    orderBy: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.UPDATE_ORDERBY:
        return {
            ...state,
            orderBy: action.data
        };
        default: return state;
    }
}

export default reducer;