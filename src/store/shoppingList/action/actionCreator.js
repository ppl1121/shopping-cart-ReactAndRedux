import * as actionType from './actionType';
import axios from '../../../axios/shoppingCart-axios';

const getProductsStart = () => {
    return {
        type: actionType.GET_PRODUCTS_START
    }
}

const getProductsFail = (error) => {
    return {
         type: actionType.GET_PRODUCTS_FAIL,
         errorMessage: error
    }
}

const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        data: products
    }
}

export const updateProducts = (Products, filter, sort_method) => {
    // filter = ["S", "XS","L"];
    let filtered_products = [];
    if(filter.length===0){
        filtered_products = [...Products];
    }
    else{
        filtered_products = Products.filter(product => 
            product.availableSizes.find(availablesize => filter.find(f => f===availablesize)))
    }
    
    let sorted_products = [];
    if(sort_method==='lowestPrice'){
        sorted_products = [...filtered_products.sort((a,b) => {
            if(a.price< b.price) {
                return -1;
            }
            if(a.price> b.price) {
                return 1;
            }
            return 0;
        })];
    }
    else if(sort_method === 'highestPrice'){
        sorted_products = [...filtered_products.sort((a,b) => {
            if(a.price> b.price) {
                return -1;
            }
            if(a.price< b.price) {
                return 1;
            }
            return 0;
        })];
    }
    else {
        sorted_products = [...filtered_products];
    }
    return {
        type: actionType.UPDATE_PRODUCTS,
        data: sorted_products
    }
}

// export const filterProducts = (currentProducts, filter) => {
//     filter = ["S", "XS","L"];
//     const filtered_products = currentProducts.filter(product => 
//         product.availableSizes.find(availablesize => filter.find(f => f===availablesize)))
//     console.log(filtered_products);
//     return {
//         type: actionType.FILTER_PRODUCTS,
//         data: filtered_products
//     }
// }

// export const sortProducts = (currentProducts, sort_method) => {
//     let sorted_products = currentProducts;
//     if(sort_method==='lowestPrice'){
//         sorted_products = [...currentProducts.sort((a,b) => {
//             if(a.price< b.price) {
//                 return -1;
//             }
//             if(a.price> b.price) {
//                 return 1;
//             }
//             return 0;
//         })];
//     }
//     else if(sort_method === 'highestPrice'){
//         sorted_products = [...currentProducts.sort((a,b) => {
//             if(a.price> b.price) {
//                 return -1;
//             }
//             if(a.price< b.price) {
//                 return 1;
//             }
//             return 0;
//         })];
//     }
//     else {
//         sorted_products = [...currentProducts];
//     }
//     return {
//         type: actionType.SORT_PRODUCTS,
//         data: sorted_products
//     }
// }



export const getProducts = () => {
    return dispatch => {
        dispatch(getProductsStart());
        axios.get('/products.json').then(response => {
             console.log(response.data.products);
            dispatch(setProducts(response.data.products));
        }).catch(err => {
            console.log(err);
            dispatch(getProductsFail(err));
        })
    }
}