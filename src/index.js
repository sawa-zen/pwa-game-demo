import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store';
import Router from './router/Router';

injectGlobal`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    background: black;
    font-family: sans-serif;
    user-select: none;
  }
`;

const target = document.getElementById('root');
render(
  <Provider store={store}>
    <Router />
  </Provider>,
  target,
);
