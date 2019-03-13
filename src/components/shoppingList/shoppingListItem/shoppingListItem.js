import React  from 'react';
import classes from './shoppingListItem.css'

const shoppingListItem = (props) => (
        <div className={classes.ListItem}>
            <img className={classes.Img} src={require(`../../../static/products/${props.sku}_1.jpg`)} alt={props.title} />
            <p className={classes.Title}> 
                {props.title}
            </p>   
            <div className={classes.Price}>
                $ {props.price.toFixed(2)}
            </div>
            <div className={classes.Installments}>
                or {props.installments} x ${(props.price/props.installments).toFixed(2)}
            </div>
            <div className={classes.AddToCart} onClick={props.addProductHandler}>
                Add to Cart
            </div>
        </div>
)
    

export default shoppingListItem;