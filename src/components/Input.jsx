import React, { useState } from "react";

export default function Input({ setTodoLists, todoLists }) {
	const [todo, setTodo] = useState("");

	function handleChange(e) {
		setTodo(e.target.value);
	}

	function AddTodo(e) {
		e.preventDefault();
		const todoListObj = {
			todo: todo,
			id: Math.floor(Math.random() * 10000 + 1),
			isCompleted: false,
		};
		setTodoLists((prev) => {
			return [...prev, todoListObj];
		});
		setTodo("");
	}

	return (
		<form>
			<input type="text" value={todo} name={todo} onChange={handleChange} />
			<button onClick={AddTodo}>Add</button>
		</form>
	);
}
