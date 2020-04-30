import React from 'react';
import { Theme } from 'models/Theme.model';

const initialState = {
  theme: null,
};

type Action = { type: 'SET_THEME'; theme: Theme | null | undefined };
type Dispatch = (action: Action) => void;
type State = {
  theme: Theme | null | undefined;
};
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const AppReducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...prevState,
        theme: action.theme,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a CountProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a CountProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
