import React from 'react';
import classes from './shoppingCartFooter.css';

const shoppingCartFooter = (props) => (
    <div className={classes.Footer}>
        <div className={classes.Total}>
            <span style={{float: 'left'}}>Total:</span>
            <span style={{float: 'right'}}>$ {props.calculateTotalPrice().toFixed(2)}</span>       
        </div>
        <div className={classes.Checkout}>
            <button>Checkout</button>
        </div>
    </div>
)

export default shoppingCartFooter;