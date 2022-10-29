import React, { useState } from "react";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "./assets/style.css";

function App() {
	const [todoLists, setTodoLists] = useState(
		localStorage.getItem("todoItems")
			? JSON.parse(localStorage.getItem("todoItems"))
			: []
	);

	return (
		<div className="form_container">
			<Input setTodoLists={setTodoLists} todoLists={todoLists} />
			<Tasks todoLists={todoLists} setTodoLists={setTodoLists} />
		</div>
	);
}

export default App;
