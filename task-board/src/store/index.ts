/** @format */

import {legacy_createStore as createStore} from "redux";
import {persistedReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"
import {persistStore} from "redux-persist";


export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store)