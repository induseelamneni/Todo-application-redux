import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { Reducer } from './Reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk]

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store