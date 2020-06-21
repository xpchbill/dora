import { createStore, applyMiddleware, compose } from 'redux';
import { appReducer } from './rootReducer';
import { sagaMiddleware, middlewares } from './middlewares';
import { rootSaga } from './sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const reactRouterMiddleware: any = routerMiddleware(history);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

middlewares.push(reactRouterMiddleware);

export const store = createStore(
  appReducer(history),
  compose(
    applyMiddleware(...middlewares),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose,
  ),
);

sagaMiddleware.run(rootSaga);
