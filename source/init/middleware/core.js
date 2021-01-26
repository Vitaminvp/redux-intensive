// Core
import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#AF5C1C',
    error: () => '#ff0005',
  },
});
const sagaMiddleware = createSagaMiddleware();
const devtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtool ? devtool : compose;
const middleware = [sagaMiddleware, thunk];

if (__DEV__) {
  middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
export { enhancedStore, sagaMiddleware };
