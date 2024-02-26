import { compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { createStoreHook } from "react-redux";
// root-reducer

const middleWares = [logger];

const componsedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStoreHook(rootReducer, undefined, middleWares);
