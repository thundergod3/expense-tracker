import React from "react";
import { connect } from "react-redux";
import TransactionItem from "../transactionItem/TransactionItem";

const TransactionList = (props) => {
	const { transactions } = props;

	return (
		<>
			<h3>History</h3>
			{transactions.length === 0 ? (
				"You don't have any history"
			) : (
				<ul id="list" className="list">
					{transactions.map((transaction) => (
						<TransactionItem transaction={transaction} key={transaction.id} />
					))}
				</ul>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		transactions: state.expenseReducer.transactions,
	};
};

export default connect(mapStateToProps, null)(TransactionList);
