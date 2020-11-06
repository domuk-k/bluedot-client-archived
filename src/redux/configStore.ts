import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import reducer from "./module/reducer";

const configStore = (history: History<unknown>) => {
  const store = createStore(
    reducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};

export default configStore;
