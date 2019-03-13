import React from 'react';
import classes from './shoppingSizeFilterItem.css'
const shoppingSizeFilterItem = (props) => {
    let attachedClasses = [];
    if(props.checkedButton){
        attachedClasses = [classes.Checked];
    }
    return (
        <div className={classes.FilterItem}>
            <label className={attachedClasses.join(' ')}>
                <input type="checkbox" value = {props.lable} onChange = {props.toggle} />
                <span>{props.lable}</span>
            </label>
        </div>
    )
}

export default shoppingSizeFilterItem;


