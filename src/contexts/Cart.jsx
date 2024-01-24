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