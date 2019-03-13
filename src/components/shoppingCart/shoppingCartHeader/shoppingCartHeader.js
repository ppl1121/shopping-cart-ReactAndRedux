import React from 'react';
import classes from './shoppingCartHeader.css';
const cartHeader = (props) => (
    <div className={classes.Header}>
        <div className={classes.Img}>
            <span className={classes.AmountIcon}>{props.calculateTotalAmount()}</span>
        </div>
    </div>
    
    
    
)

export default cartHeader;