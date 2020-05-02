import * as types from "../../../constants/types";

const transactionLocalStorage = localStorage.getItem("transactions")
	? JSON.parse(localStorage.getItem("transactions"))
	: [];

const inititalState = {
	transactions: transactionLocalStorage,
};

const expenseReducer = (state = inititalState, action) => {
	switch (action.type) {
		case types.DELETE_TRANSACTION_SUCCEEDED: {
			return { ...state, transactions: state.transactions.filter((transaction) => transaction.id !== action.id) };
		}
		case types.ADD_TRANSACTION_SUCCEEDED: {
			return { ...state, transactions: [...state.transactions, action.transaction] };
		}
		default: {
			return state;
		}
	}
};

export default expenseReducer;
