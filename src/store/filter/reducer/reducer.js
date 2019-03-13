import * as actionType from '../action/actionType'

const initialState = {
    filter: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.UPDATE_FILTER:
        return {
            ...state,
            filter: action.data
        };
        default: return state;
    }
}

export default reducer;