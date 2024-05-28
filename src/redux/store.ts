import { createStore, applyMiddleware, compose } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import { AppState } from './types/state';
import { AppActions } from './types/actions';

// Usar Redux DevTools si está disponible
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk as unknown as ThunkMiddleware<AppState, AppActions>];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;


