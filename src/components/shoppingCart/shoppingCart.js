import React, {Component} from 'react';
import classes from './shoppingCart.css';
import ShoppingCartBody from './shoppingCartBody/shoppingCartBody';
import {connect} from  'react-redux';
import * as shoppingCartActionCreator from '../../store/cart/action/actionCreator';
import ShoppingCartHeader from './shoppingCartHeader/shoppingCartHeader';
import ShoppingCartFooter from './shoppingCartFooter/shoppingCartFooter';

class ShoppingCart extends Component {

    state = {
        CartOpened: false
    }

    calculateTotalAmount = () =>{
        let total_amount = 0;
        for (let id in this.props.products_in_cart){
            total_amount= total_amount + this.props.products_in_cart[id].amount;
        }
        return total_amount;
    }

    calculateTotalPrice = () =>{
        let total_price = 0;
        for (let id in this.props.products_in_cart){
            total_price= total_price + this.props.products_in_cart[id].amount*this.props.products_in_cart[id].price;
        }
        return total_price;
    }

    openClickHandler = () =>{
        this.setState({
            CartOpened: true
        })
    }

    closeClickHandler = () =>{
        this.setState({
            CartOpened: false
        })
    }

    deleteItemHandler = (item) =>{
        this.props.deleteItem(item);
    }

    addItemHandler = (item) => {
        this.props.addItem(item);
    }

    subItemHandler = (item) => {
        this.props.subItem(item);
    }



    componentDidUpdate() {
        if(!this.props.products_in_cart){
            this.props.initializeCart(this.props.products);
        }
    }


    render() {
        let attachedClasses = [classes.Cart];
        let CartTrigger = (
            <div className={classes.CartButtonClosed} onClick={this.openClickHandler}>
                <span className={classes.AmountIcon}>{this.calculateTotalAmount()}</span>
            </div>
        )
        if(this.state.CartOpened){
            CartTrigger = (
                <div className={classes.CartButtonOpened} onClick={this.closeClickHandler}>
                </div>
            )
            attachedClasses = [classes.Cart, classes.Opened];
        }
        // console.log(this.props.products_in_cart);
        return (
            <div className={attachedClasses.join(' ')}>
                {CartTrigger}
                <ShoppingCartHeader calculateTotalAmount={this.calculateTotalAmount} />
                <ShoppingCartBody addHandler={this.addItemHandler} subHandler={this.subItemHandler} deleteHandler= {this.deleteItemHandler} content={this.props.products_in_cart} />
                <ShoppingCartFooter calculateTotalPrice={this.calculateTotalPrice} />
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        products_in_cart: state.cart.products,
        products: state.shoppingList.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (product) => dispatch(shoppingCartActionCreator.addProduct(product)),
        subItem: (product) => dispatch(shoppingCartActionCreator.subProduct(product)),
        deleteItem: (product) => dispatch(shoppingCartActionCreator.deleteProduct(product)),
        initializeCart : (products) => dispatch(shoppingCartActionCreator.initializeCart(products)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)