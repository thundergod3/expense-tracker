import * as types from "../../../constants/types";

export const deleteTransaction = (id) => {
	return {
		type: types.DELETE_TRANSACTION,
		id,
	};
};

export const deleteTransactionSucceeded = (id) => {
	return {
		type: types.DELETE_TRANSACTION_SUCCEEDED,
		id,
	};
};

export const addTransaction = (transaction) => {
	return {
		type: types.ADD_TRANSACTION,
		transaction,
	};
};

export const addTransactionSucceeded = (transaction) => {
	return {
		type: types.ADD_TRANSACTION_SUCCEEDED,
		transaction,
	};
};
