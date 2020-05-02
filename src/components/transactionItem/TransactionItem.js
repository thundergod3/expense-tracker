import React from "react";
import * as transactionAction from "../../store/redux/actions/expenseAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const TransactionItem = (props) => {
	const { transaction, transactionActionCreator } = props;
	const { deleteTransaction } = transactionActionCreator;

	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<li className={sign === "-" ? "minus" : "plus"}>
			{transaction.text}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
				x
			</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		transactionActionCreator: bindActionCreators(transactionAction, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(TransactionItem);
