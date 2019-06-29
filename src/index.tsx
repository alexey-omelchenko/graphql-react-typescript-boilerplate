import App from 'app';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies

import 'index.scss';

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderComponent(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  // only ever in dev
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    renderComponent(require('./app').default);
  });
}
