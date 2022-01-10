import { createContext, useReducer } from 'react';

import reducer from './reducer';

export const ShopContext = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBrasketShow: false,
    alertName: '',
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.handleBrasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.removeFromBrasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BRASKET', payload: { id: itemId } });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ContextProvider;
