import React, { useState } from "react";
import '../App.css'
const TodoForm = ({ addTodo }) => {
	const [input, setInput] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo(input);
		setInput(" ");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input onChange={(event) => setInput(event.target.value)} value={input } />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default TodoForm;
