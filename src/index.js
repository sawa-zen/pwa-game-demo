import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './app/store';
import App from './app/App';

injectGlobal`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: black;
    font-family: sans-serif;
    user-select: none;
  }
`;

const renderApp = () => {
  const target = document.getElementById('root');
  if (target instanceof HTMLElement) {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      target,
    );
  }
};
renderApp();
