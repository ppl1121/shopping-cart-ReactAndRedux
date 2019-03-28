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


export const getProducts = () => {
    // return dispatch => {
    //     dispatch(getProductsStart());
    //     axios.get('/products.json').then(response => {
    //          console.log(response.data.products);
    //         dispatch(setProducts(response.data.products));
    //     }).catch(err => {
    //         console.log(err);
    //         dispatch(getProductsFail(err));
    //     })
    // }
    return dispatch => {
        dispatch(getProductsStart());
        let myJsonData = '{"products":[{"availableSizes":["S","XS"],"currencyFormat":"$","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":10.9,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt"},{"availableSizes":["M"],"currencyFormat":"$","currencyId":"USD","description":"","id":13,"installments":5,"isFreeShipping":true,"price":29.45,"sku":51498472915966370,"style":"Front print and paisley print","title":"Dark Thug Blue-Navy T-Shirt"},{"availableSizes":["X","L","XL"],"currencyFormat":"$","currencyId":"USD","description":"GPX Poly 1","id":14,"installments":3,"isFreeShipping":true,"price":9,"sku":10686354557628304,"style":"Front tie dye print","title":"Sphynx Tie Dye Wine T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"Treino 2014","id":15,"installments":5,"isFreeShipping":true,"price":14,"sku":11033926921508488,"style":"Black T-Shirt with front print","title":"Skuul"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"","id":11,"installments":3,"isFreeShipping":true,"price":13.25,"sku":39876704341265610,"style":"Wine","title":"Wine Skul T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/nº","id":0,"installments":9,"isFreeShipping":true,"price":10.9,"sku":8552515751438644,"style":"Branco com listras pretas","title":"Cat Tee Black T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/nº","id":1,"installments":9,"isFreeShipping":true,"price":10.9,"sku":18644119330491310,"style":"Preta com listras brancas","title":"Sphynx Tie Dye Grey T-Shirt"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/nº","id":2,"installments":7,"isFreeShipping":true,"price":14.9,"sku":11854078013954528,"style":"Branco com listras pretas","title":"Danger Knife Grey"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"2014 s/nº","id":3,"installments":7,"isFreeShipping":true,"price":14.9,"sku":876661122392077,"style":"Preto com listras brancas","title":"White DGK Script Tee"},{"availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/nº - Jogador","id":4,"installments":12,"isFreeShipping":false,"price":25.9,"sku":9197907543445676,"style":"Branco com listras pretas","title":"Born On The Streets"},{"availableSizes":["X","L","XL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 + Camiseta 1º Mundial","id":5,"installments":9,"isFreeShipping":false,"price":10.9,"sku":10547961582846888,"style":"Preto","title":"Tso 3D Short Sleeve T-Shirt A"},{"availableSizes":["XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"Goleiro 13/14","id":6,"installments":0,"isFreeShipping":true,"price":49.9,"sku":6090484789343891,"style":"Branco","title":"Man Tie Dye Cinza Grey T-Shirt"},{"availableSizes":["S"],"currencyFormat":"$","currencyId":"USD","description":"1977 Infantil","id":7,"installments":4,"isFreeShipping":true,"price":22.5,"sku":18532669286405344,"style":"Preto com listras brancas","title":"Crazy Monkey Black T-Shirt"},{"availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":8,"installments":4,"isFreeShipping":false,"price":18.7,"sku":5619496040738316,"style":"Azul escuro","title":"Tso 3D Black T-Shirt"},{"availableSizes":["L","XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":9,"installments":5,"isFreeShipping":true,"price":134.9,"sku":11600983276356164,"style":"","title":"Crazy Monkey Grey"},{"availableSizes":["L","XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":10,"installments":9,"isFreeShipping":true,"price":49,"sku":27250082398145996,"style":"","title":"On The Streets Black T-Shirt"}]}';
        let myJsonObject = JSON.parse(myJsonData);
        dispatch(setProducts(myJsonObject.products));
    }
}