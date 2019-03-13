import React from 'react';
import classes from './shoppingheader.css';
import OrderBy from '../../OrderBy/OrderBy';
const shoppingheader = (props) => (
    <div className={classes.Header}>
        <div className={classes.Total}>totally {props.amount} products</div>
        <div className={classes.OrderBy}><OrderBy /></div>
    </div>
);

export default shoppingheader;