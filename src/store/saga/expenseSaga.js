import * as types from "../../constants/types";
import { takeLatest, put } from "redux-saga/effects";
import { deleteTransactionSucceeded, addTransactionSucceeded } from "../redux/actions/expenseAction";

function* deleteTransaction({ id }) {
	yield put(deleteTransactionSucceeded(id));
}

function* addTransaction({ transaction }) {
	yield put(addTransactionSucceeded(transaction));
}

function* expenseSaga() {
	yield takeLatest(types.DELETE_TRANSACTION, deleteTransaction);
	yield takeLatest(types.ADD_TRANSACTION, addTransaction);
}

export default expenseSaga;
