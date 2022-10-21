import React, { useState } from "react";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "./assets/CSS/check.css";

function App() {
	const [todoLists, setTodoLists] = useState([]);

	return (
		<>
			<Input setTodoLists={setTodoLists} todoLists={todoLists} />
			<Tasks todoLists={todoLists} setTodoLists={setTodoLists} />
		</>
	);
}

export default App;
