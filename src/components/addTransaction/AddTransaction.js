import React, { useState } from "react";
import * as transactionAction from "../../store/redux/actions/expenseAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const AddTransaction = (props) => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const { transactionActionCreator } = props;
	const { addTransaction } = transactionActionCreator;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text !== "") {
			const newTransaction = {
				id: Math.floor(Math.random() * 100000000),
				text,
				amount: +amount,
			};

			addTransaction(newTransaction);
			setAmount(0);
			setText("");
		}
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label form="amount">
						Amount <br />
						(negative -expense, positive - income)
					</label>
					<input
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						type="number"
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		transactionActionCreator: bindActionCreators(transactionAction, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(AddTransaction);
