import { combineReducers } from "redux";
import expenseReducer from "./redux/reducers/expenseReducer";

const rootReducer = combineReducers({
	expenseReducer,
});

export default rootReducer;
