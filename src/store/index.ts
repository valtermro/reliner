import * as redux from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import appReducer, { AppState } from './app/reducer';

export interface RootAppState {
  app: AppState
};

export const useSelector: TypedUseSelectorHook<RootAppState> = useReduxSelector;

export function createStore() {
  const reducers = redux.combineReducers({
    app: appReducer
  });
  
  return redux.createStore(reducers);
}