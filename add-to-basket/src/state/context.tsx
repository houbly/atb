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
      thumbnail: '',
      price: 2.5,
    },
    {
      id: '0000002',
      name: 'Toilet Paper',
      thumbnail: '',
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
