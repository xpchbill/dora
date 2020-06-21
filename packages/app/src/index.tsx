import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import theme from '@ALK-UI/theme';
import { ChakraProvider, CSSReset } from '@ALK-UI/core';
import { ConnectedRouter } from 'connected-react-router';

import { NoticeWidgets } from './components';
import { store, history } from './store/configureStore';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Routes />
          <NoticeWidgets />
        </ChakraProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
