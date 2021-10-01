import { App } from '../../master/App';
import { AppAction } from './reducer';

export const SET_APPS = 'SET_APPS';
export const SET_LOADING = 'SET_LOADING';

export function setApps(apps: App[]): AppAction {
  return { type: SET_APPS, data: apps };
}

export function stopLoading(): AppAction {
  return { type: SET_LOADING, data: false };
}