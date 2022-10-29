import React, { useState } from "react";

export default function Input({ setTodoLists, todoLists }) {
	const [todo, setTodo] = useState("");

	function handleChange(e) {
		setTodo(e.target.value);
	}

	function AddTodo(e) {
		e.preventDefault();
		if (!todo) {
			alert("please fill the task!");
			setTodoLists([...todoLists]);
			localStorage.setItem("todoItems", JSON.stringify([...todoLists]));
		} else {
			const todoListObj = {
				todo: todo,
				id: Math.floor(Math.random() * 10000 + 1),
				isCompleted: false,
			};
			setTodoLists((prev) => {
				return [...prev, todoListObj];
			});
			localStorage.setItem(
				"todoItems",
				JSON.stringify([...todoLists, todoListObj])
			);
			setTodo("");
		}
	}

	return (
		<form>
			<h3>Awesome Todo List</h3>
			<div className="container">
				<input
					className="prime_input"
					type="text"
					value={todo}
					name={todo}
					onChange={handleChange}
					id="todo_title"
					placeholder="What do you need to do today?"
				/>
				<button className="prime_button" onClick={AddTodo}>
					Add
				</button>
			</div>
		</form>
	);
}
