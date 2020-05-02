import React from "react";
import { connect } from "react-redux";

const Balance = (props) => {
	const { transactions } = props;

	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((preTotal, item) => (preTotal += item), 0).toFixed(2);

	return (
		<>
			<h4>Your Balance</h4>
			<h1 id="balance">${total}</h1>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		transactions: state.expenseReducer.transactions,
	};
};

export default connect(mapStateToProps, null)(Balance);
