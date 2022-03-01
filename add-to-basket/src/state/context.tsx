import React, { createContext, useReducer } from 'react';

// @types
type InitialStateType = {
  products: IProduct[];
  basket: string[];
};

export interface IProduct {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
}

export type StateActions = {
  type: 'ADD_TO_BASKET';
  payload: IProduct;
};

const initialState = {
  products: [
    {
      id: '0000001',
      name: 'Face Mask',
      thumbnail:
        'https://images.unsplash.com/photo-1589091683318-a10f065d844a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      price: 2.5,
    },
    {
      id: '0000002',
      name: 'Toilet Paper',
      thumbnail:
        'https://images.unsplash.com/photo-1633002161416-8e2fafa0996b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      price: 0.65,
    },
  ],
  basket: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<StateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const appReducer = (state: InitialStateType, action: StateActions) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
      };
    default:
      return state;
  }
};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
