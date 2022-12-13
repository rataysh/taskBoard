/** @format */

import {legacy_createStore as createStore} from "redux";
import {rootResucer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"

export const store = createStore(rootResucer, composeWithDevTools());
