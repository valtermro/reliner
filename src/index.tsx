import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import { installApps } from './master/services';
import { createStore } from './store';
import { setApps, stopLoading } from './store/app/actions';
import { CssBaseline } from '@material-ui/core';

const store = createStore();

async function load() {
  const apps = await installApps([
    import('./pet-int-req-protocolar')
  ]);

  store.dispatch(setApps(apps));
  store.dispatch(stopLoading());
}

load();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
