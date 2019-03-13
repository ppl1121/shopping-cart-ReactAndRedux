import React, {Component} from 'react';
import ShoppingSizeFilterItem from '../shoppingSizeFilter/shoppingSizeFilterItem/shoppingSizeFilterItem';
import classes from "./shoppingSizeFilter.css"
import {connect} from  'react-redux';
import * as shoppingListActionCreator from '../../store/shoppingList/action/actionCreator';
import * as filterActionCreator from '../../store/filter/action/actionCreator';
class ShoppingSizeFilter extends Component {

    toggleHandler = (event) =>{
        // console.log(event.target.checked );
        // console.log(event.target.value );
        if(event.target.checked){
            let filterArray = [...this.state.filter];
            filterArray.push(event.target.value);
            this.setState({filter:filterArray});
        }
        else{
            let filterArray = [...this.state.filter];
            let index_delete_filter = filterArray.findIndex(f => f===event.target.value);
            filterArray.splice(index_delete_filter,1);
            this.setState({filter:filterArray});
        }
        setTimeout(() => {this.props.updateFilter(this.state.filter);
                        this.props.updateProducts(this.props.products, this.state.filter, this.props.sort_method)}, 0);
    }

    componentDidUpdate () {
        // this.props.updateFilter(this.state.filter);
        // // setTimeout(() =>this.props.updateProducts(this.props.products, this.props.filter, ''),0)
        // this.props.updateProducts(this.props.products, this.state.filter, '')
    }

    

    state = {
        filter: []
    }

    render () {
        const SizeFilterLables = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
        const SizeFilterItems = SizeFilterLables.map( item => {
            let checked = false;
            if (this.state.filter.find(f => f===item)) {
                checked = true;
            }
            return (
                    <ShoppingSizeFilterItem checkedButton ={checked} key={item} lable={item} toggle= {this.toggleHandler} ></ShoppingSizeFilterItem>
        )})
        return (
            <div className={classes.SizeFilter}>
                <h4 className={classes.FilterTitle}>Sizes: </h4>
                {SizeFilterItems}
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
        updateFilter: (filter) => dispatch(filterActionCreator.updateFilter(filter)),
        updateProducts: (Products, filter, sort_method) => dispatch(shoppingListActionCreator.updateProducts(Products, filter, sort_method))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingSizeFilter);