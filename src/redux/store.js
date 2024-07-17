import { createStore, applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store)

export { store, persistor }