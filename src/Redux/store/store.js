import rootReducer from '../combinereducer';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger'; // Import createLogger from redux-logger

const persistConfig = {
  key: 'root',
  storage,
};

const loggerMiddleware = createLogger(); // Create a logger middleware instance

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware) // Apply both thunkMiddleware and loggerMiddleware
);
const persistor = persistStore(store);

export { store, persistor };
