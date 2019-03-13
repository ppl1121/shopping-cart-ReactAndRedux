import React, {Component} from 'react';
import classes from "./shoppingList.css";
import Shoppingheader from "./shoppingheader/shoppingheader";
import ShoppingListItem from '../shoppingList/shoppingListItem/shoppingListItem';
import {connect} from  'react-redux';
import * as ListActionCreator from '../../store/shoppingList/action/actionCreator';
import * as CartActionCreator from '../../store/cart/action/actionCreator';
class ShoppingList extends Component {



    componentDidMount () {
        this.props.getProducts();
    }

    // filter = () => {
    //     this.props.filterProducts(this.props.current_products);
    // }

    

    // lowest_order = () => {
    //     this.props.sortProducts(this.props.current_products, (a,b) => {
    //         if(a.price< b.price) {
    //             return -1;
    //         }
    //         if(a.price> b.price) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // }



    render () {
        const List = this.props.current_products.map(product => (
            <ShoppingListItem addProductHandler={() => this.props.addProducts(product)}  title={product.title} installments={product.installments} price={product.price} sku={product.sku} key={product.id} />
        ));
        
        return (
            <div className={classes.ShoppingList}>
                <Shoppingheader amount = {this.props.current_products.length} />
                {List}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isfetching: state.shoppingList.isfetching,
        products: state.shoppingList.products,
        current_products: state.shoppingList.current_products,
        error: state.shoppingList.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(ListActionCreator.getProducts()),
        addProducts: (product) => dispatch(CartActionCreator.addProduct(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);