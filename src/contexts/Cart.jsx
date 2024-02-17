/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initialState = {
  cart: JSON.parse(localStorage.getItem("nepalimomohouse_cart")) || [],
  subtotal: JSON.parse(localStorage.getItem("nepalimomohouse_subtotal")) || 0,
};

const CartContext = createContext(initialState);

const calculateSubtotal = (cart) => {
  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.price;
  }
  return subtotal;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      localStorage.setItem(
        "nepalimomohouse_subtotal",
        JSON.stringify(calculateSubtotal([...state.cart, action.payload]))
      );

      return {
        ...state,
        cart: [...state.cart, action.payload],
        subtotal: calculateSubtotal([...state.cart, action.payload]),
      };

    case "REMOVE_ITEM":
      var _tempCart = state.cart;
      _tempCart.splice(_tempCart.indexOf(action.payload), 1);
      localStorage.setItem("nepalimomohouse_cart", JSON.stringify(_tempCart));
      localStorage.setItem(
        "nepalimomohouse_subtotal",
        JSON.stringify(calculateSubtotal(_tempCart))
      );
      return {
        ...state,
        cart: _tempCart,
        subtotal: calculateSubtotal(_tempCart),
      };

    case "INCREASE_ITEM_QUANTITY":
      const itemIndex = state.cart.indexOf(action.payload);

      const updatedCart = [...state.cart];
      updatedCart[itemIndex].quantity += 1;
      updatedCart[itemIndex].price =
        updatedCart[itemIndex].quantity * updatedCart[itemIndex].product.price;

      const updatedSubtotal = calculateSubtotal(updatedCart);
      localStorage.setItem("nepalimomohouse_cart", JSON.stringify(updatedCart));
      localStorage.setItem(
        "nepalimomohouse_subtotal",
        JSON.stringify(updatedSubtotal)
      );
      return {
        ...state,
        cart: updatedCart,
        subtotal: updatedSubtotal,
      };

    case "DECREASE_ITEM_QUANTITY":
      const _itemIndex = state.cart.indexOf(action.payload);
      const _updatedCart = [...state.cart];

      if (_updatedCart[_itemIndex].quantity > 1) {
        _updatedCart[_itemIndex].quantity -= 1;
        _updatedCart[_itemIndex].price =
          _updatedCart[_itemIndex].quantity *
          _updatedCart[_itemIndex].product.price;

        const updatedSubtotal = calculateSubtotal(_updatedCart);
        localStorage.setItem(
          "nepalimomohouse_cart",
          JSON.stringify(_updatedCart)
        );
        localStorage.setItem(
          "nepalimomohouse_subtotal",
          JSON.stringify(updatedSubtotal)
        );
        return {
          ...state,
          cart: _updatedCart,
          subtotal: updatedSubtotal,
        };
      }
      return state;

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
