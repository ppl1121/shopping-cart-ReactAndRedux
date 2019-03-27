import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import shoppingListReducer from './store/shoppingList/reducer/reducer';
import orderByReducer from './store/orderBy/reducer/reducer';
import filterReducer from './store/filter/reducer/reducer';
import cartReducer from './store/cart/reducer/reducer';

const initialState = JSON.parse(window.localStorage.getItem('cartState')) || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    shoppingList: shoppingListReducer,
    orderBy: orderByReducer,
    filter: filterReducer,
    cart: cartReducer
});
const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(()=> {
    const state = store.getState();
    const persist_cartItem = {
        cart: state.cart
    };
    window.localStorage.setItem('cartState', JSON.stringify(persist_cartItem));
})


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
