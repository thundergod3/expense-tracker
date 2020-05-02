import React from "react";
import { connect } from "react-redux";

const IncomeExpense = (props) => {
	const { transactions } = props;

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((preIcome, item) => (preIcome += item), 0)
		.toFixed(2);

	const expense = (
		amounts.filter((item) => item < 0).reduce((preExpense, item) => (preExpense += item), 0) * -1
	).toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus" id="money-plus">
					+{income}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus" id="money-minus">
					-${expense}
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		transactions: state.expenseReducer.transactions,
	};
};

export default connect(mapStateToProps, null)(IncomeExpense);
