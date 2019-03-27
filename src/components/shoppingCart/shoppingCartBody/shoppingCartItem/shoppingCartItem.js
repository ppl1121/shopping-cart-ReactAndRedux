import React from 'react';
import classes from './shoppingCartItem.css'
const shoppingCartItem = (props) => (
    <div className={classes.CartItem}>
        <img className={classes.Img} src={require(`../../../../static/products/${props.sku}_2.jpg`)} alt={props.title} />
        <div className={classes.TitleAmount}>
            <p>{props.title}</p>
            <div className={classes.Quantity}>
                <p className={classes.QuantityNumber}>Quantity : {props.amount}</p>
                <p onClick={() => props.addItemHandler({id: props.id})} className={classes.Add}>+</p>
                <p onClick={() => props.subItemHandler({id: props.id})} className={classes.Sub}>-</p>
            </div> 
            
        </div>
        <div className={classes.Price}>
            <p>
                $ {props.price.toFixed(2)}
            </p>
        </div>
        <div className={classes.Delete} onClick={() => props.deleteItemHandler({id: props.id})}>
            X
        </div>
        
    </div>
)

export default shoppingCartItem;
