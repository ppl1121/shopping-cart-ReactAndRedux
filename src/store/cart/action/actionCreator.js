import * as actionType from './actionType'

export const addProduct = (product) => {
    return {
        type: actionType.ADD_PRODUCT,
        data: product
    }
}

export const subProduct = (product) => {
    return {
        type: actionType.SUB_PRODUCT,
        data: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: actionType.DELETE_PRODUCT,
        data: product
    }
}


export const initializeCart = (products) => {
    return {
        type: actionType.INITIALIZE_CART,
        data: products
    }
}
