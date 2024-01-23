/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

const initialState = {
  cart: null
};

const CartContext = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_CART':
      return { 
        ...state,
        cart: action.payload
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