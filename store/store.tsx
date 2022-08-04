import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localstorage";

// initial states here
const initalState = {};

const persistedState = loadState();

// middleware
const bindMiddleware = (middleware: any) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

// creating store
export const store = createStore(
  rootReducer,
  persistedState,
  bindMiddleware([thunkMiddleware])
);

store.subscribe(() => {
    saveState(store.getState());
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);