import React, { useEffect } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Balance from "./components/balance/Balance";
import IncomeExpense from "./components/incomeExpense/IncomeExpense";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
import { connect } from "react-redux";

const App = (props) => {
	const { transactions } = props;

	useEffect(() => {
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}, [transactions]);

	return (
		<>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		transactions: state.expenseReducer.transactions,
	};
};

export default connect(mapStateToProps, null)(App);
