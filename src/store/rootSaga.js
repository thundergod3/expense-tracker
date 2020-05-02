import { all, fork } from "redux-saga/effects";
import expenseSaga from "./saga/expenseSaga";

export default function* rootSaga() {
	yield all([fork(expenseSaga)]);
}
