import * as actionType from '../action/actionType'

const initialState = {
    products: [],
    isfetching: false,
    error: null,
    current_products: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.GET_PRODUCTS_START:
        return {
            ...state,
            isfetching: true
        };
        case actionType.SET_PRODUCTS:
        return {
            ...state,
            isfetching: false,
            products: action.data,
            current_products: action.data
        };
        case actionType.GET_PRODUCTS_FAIL:
        return {
            ...state,
            isfetching: false,
            error: action.errorMessage
        };
        case actionType.FILTER_PRODUCTS:
        return {
            ...state,
            current_products: action.data
        }
        case actionType.SORT_PRODUCTS:
        return {
            ...state,
            current_products: action.data
            
        }
        case actionType.UPDATE_PRODUCTS:
        return {
            ...state,
            current_products: action.data
        }
        default: return state;
    }
}

export default reducer