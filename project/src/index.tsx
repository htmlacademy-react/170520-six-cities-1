import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from './store/store';
import type {State} from './types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
