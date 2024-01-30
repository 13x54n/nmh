/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

const initialState = {
  cart: JSON.parse(localStorage.getItem("nepalimomohouse_cart")) || []
};


const CartContext = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return { 
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_ITEM':
      var _tempCart = state.cart;
      _tempCart.splice(_tempCart.indexOf(action.payload), 1)
      localStorage.setItem('nepalimomohouse_cart', JSON.stringify(_tempCart))
      return {
        ...state,
        cart: _tempCart
      }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatchCartState }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };