import React, { createContext, useReducer } from 'react';

// @types
type InitialStateType = {
  basket: { info: IProductInfo; inBasket: number }[];
};

export interface IProductInfo {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
  groupDiscount?: {
    groupQuantity: number;
    groupPrice: number;
    description?: string;
  };
}

export type StateActions =
  | {
      type: 'ADD_TO_BASKET';
      payload: { info: IProductInfo; units?: number };
    }
  | {
      type: 'REMOVE_FROM_BASKET';
      payload: { id: string };
    }
  | {
      type: 'CLEAR_BASKET';
    };

const initialState = {
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
      let payload = state.basket;
      if (
        payload.find((product) => product.info.id === action.payload.info.id)
      ) {
        payload = payload.map((product) => {
          if (product.info.id === action.payload.info.id) {
            return {
              ...product,
              inBasket: action.payload.units || product.inBasket + 1,
            };
          }
          return product;
        });
      } else {
        payload.push({
          info: action.payload.info,
          inBasket: action.payload.units || 1,
        });
      }
      return {
        ...state,
        basket: payload,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(
          (product) => product.info.id !== action.payload.id
        ),
      };
    case 'CLEAR_BASKET':
      return {
        ...state,
        basket: [],
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
