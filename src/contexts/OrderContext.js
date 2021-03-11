import React, {useState, createContext} from 'react';

const OrderContext = createContext();

const OrderContextProvider = ({children}) => {
  const orderBase = {
    orderIsHurry: false,
    orderItems: [],
    updateOrder: (next) => {
      setOrder((prev) => {
        return {...prev, ...next};
      });
    },
  };
  const [order, setOrder] = useState(orderBase);
  return (
    <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
  );
};

export {OrderContext, OrderContextProvider};
