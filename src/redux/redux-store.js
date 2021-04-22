import CurrencyReducer from "./CurrencyReducer.js";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ConvertReducer} from "./ConverterReducer";


let reducers = combineReducers({
	Currencies: CurrencyReducer,
	Conversion: ConvertReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
