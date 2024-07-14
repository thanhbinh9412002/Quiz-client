import { createStore, applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// Tạo store với middleware
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default {store};

const composeEnhancers = (middlewares) => {
  //console.log(process.env.NODE_ENV)
  return process.env.NODE_ENV !== "production"
    ? composeWithDevTools(middlewares)
    : middlewares;
};

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;