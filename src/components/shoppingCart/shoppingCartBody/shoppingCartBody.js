import React from 'react';
import ShoppingCartItem from './shoppingCartItem/shoppingCartItem';
import classes from './shoppingCartBody.css';
const shoppingCartBody = (props) => {
    
    let Items=[];
    for (let id in props.content){
        
        if(props.content[id].amount > 0) {
            Items.push({...props.content[id]});    
        } 
    }

    Items.sort((a,b) => {
        if(typeof a.dateStamp === 'string') {
            a.dateStamp = new Date(a.dateStamp);           
        }
        if(typeof b.dateStamp === 'string') {
            b.dateStamp = new Date(b.dateStamp);
        }
        if(a.dateStamp.getTime()<b.dateStamp.getTime()){
            return -1;
        }
        if(a.dateStamp.getTime()>b.dateStamp.getTime()){
            return 1;
        }
        return 0;
    });



    // const total_price =Items.reduce((sum,el)=> sum+el.price*el.amount, 0);
   
    let CartItems = Items.map(item => <ShoppingCartItem addItemHandler={props.addHandler} subItemHandler={props.subHandler} deleteItemHandler={props.deleteHandler} key={item.id} title={item.title} amount={item.amount} sku={item.sku} price={item.price} id={item.id} />);
    return (
            <div className={classes.Content}>
                {CartItems}
            </div>
    )
}

export default shoppingCartBody;
    
