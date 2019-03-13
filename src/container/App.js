import React, { Component } from 'react';
import ShoppingSizeFilter from '../components/shoppingSizeFilter/shoppingSizeFilter';
import ShoppingList from '../components/shoppingList/shoppingList';
import ShoppingCart from '../components/shoppingCart/shoppingCart';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className={classes.Main}>
          <ShoppingSizeFilter></ShoppingSizeFilter>
          <ShoppingList></ShoppingList>
        </main>
        <ShoppingCart></ShoppingCart>
      </React.Fragment>
    );
  }
}

export default App;
