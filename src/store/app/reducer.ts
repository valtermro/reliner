import { Action } from 'redux';
import { App } from '../../master/App';
import { SET_APPS, SET_LOADING } from './actions';

export interface AppState {
  loading: boolean;
  apps: App[];
}

export interface AppAction extends Action {
  data: App[] | boolean;
}

export default function appReducer(
  state: AppState = { loading: true, apps: [] },
  action: AppAction
): AppState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.data as boolean };

    case SET_APPS:
      return { ...state, apps: action.data as App[] };

    default:
      return state;
  }
}