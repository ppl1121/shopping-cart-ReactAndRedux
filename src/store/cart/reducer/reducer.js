import * as actionType from '../action/actionType'

const initialState = {
    products: null
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.ADD_PRODUCT:
            let new_products = {...state.products};                    
            let new_product = {...new_products[action.data.id]};
            new_product.amount++;                     
             if(new_product.amount===1){
                new_product.dateStamp = new Date();
            }
            new_products[action.data.id] = new_product;
            return {
                ...state,
                products: new_products
            }

        case actionType.SUB_PRODUCT:
            let newProducts = {...state.products};
            let newProduct = {...newProducts[action.data.id]};
            newProduct.amount--;
            newProducts[action.data.id] = newProduct;
            return {
                ...state,
                products: newProducts
            }
        case actionType.DELETE_PRODUCT:
            let Products = {...state.products};
            let Product = {...Products[action.data.id]};
            Product.amount= 0;
            Products[action.data.id] = Product;
            return {
                ...state,
                products: Products
            }
        
        case actionType.INITIALIZE_CART:
            let products = {};
            action.data.forEach(product => {
                products[product.id]= {...product, amount:0}
            })
            return {
                ...state,
                 products: products
            }
            default: return state;
    }
}

export default reducer;
