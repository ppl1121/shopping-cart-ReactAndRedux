import React, {Component} from 'react';
import classes from './OrderBy.css';
import {connect} from  'react-redux';
import * as shoppingListActionCreator from '../../store/shoppingList/action/actionCreator';
import * as orderByActionCreator from '../../store/orderBy/action/actionCreator';
class OrderBy extends Component {

    changeHandler = (event) => {
        this.props.updateOrderBy(event.target.value);
        // console.log(event.target.value);
        // console.log(this.props.sort_method);
        // this.props.updateProducts(this.props.products, [], event.target.value);
        setTimeout(()=>this.props.updateProducts(this.props.products, this.props.filter, this.props.sort_method),0);
    }

    render() {
        const optionsValue = [
            {value: '', lable: 'Select'},
            {value: 'lowestPrice', lable: 'Lowest to Highest'},
            {value: 'highestPrice', lable: 'Highest to Lowest'}
        ]
        const options = optionsValue.map(option => (
            <option key={option.value} value={option.value}>{option.lable}</option>
        ));
        return (
            <div>
                Order By  
                <select className={classes.select} onChange={this.changeHandler}>
                   {options}
                </select> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.shoppingList.products,
        filter: state.filter.filter,
        sort_method: state.orderBy.orderBy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateOrderBy: (orderBy) => dispatch(orderByActionCreator.updateOrderBy(orderBy)),
        updateProducts: (Products, filter, sort_method) => dispatch(shoppingListActionCreator.updateProducts(Products, filter, sort_method))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderBy);
