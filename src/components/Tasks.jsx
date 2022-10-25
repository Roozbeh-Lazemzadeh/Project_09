import React, { useState } from "react";

export default function Tasks({ todoLists, setTodoLists }) {
	function handleDelete(id) {
		const newtodoLists = todoLists.filter((item) => item.id !== id);
		setTodoLists(newtodoLists);
	}

	const [isEdit, setIsEdit] = useState(null);
	const [editValue, setEditValue] = useState();

	function handleEdit(id) {
		setIsEdit(id);
		const findItem = todoLists.find((item) => item.id == id);
		const temp = findItem.todo;
		setEditValue(temp);
	}
	function handleChange(e) {
		setEditValue(e.target.value);
	}
	function handleSave(id) {
		const temp = [...todoLists];
		const findTodo = temp.find((item) => item.id == id);
		findTodo.todo = editValue;
		setEditValue("");
		setIsEdit(0);
	}

	function handleComplete(id) {
		const temp = [...todoLists];
		const findList = temp.find((item) => item.id == id);
		findList.isCompleted = !findList.isCompleted;
		setTodoLists([...todoLists], findList.isCompleted);
	}

	return (
		<>
			{todoLists.map((todoList) => {
				return (
					<>
						<>
							<div>
								<input
									type="checkbox"
									onClick={() => handleComplete(todoList.id)}
								></input>

								{todoList.isCompleted ? (
									<s>{todoList.todo}</s>
								) : (
									<span>{todoList.todo}</span>
								)}
								<button onClick={() => handleDelete(todoList.id)}>
									delete
								</button>
								<button onClick={() => handleEdit(todoList.id)}>Edit</button>
							</div>
						</>

						{isEdit == todoList.id && (
							<>
								<input
									type="text"
									value={editValue ?? todoList.todo}
									name={editValue ?? todoList.todo}
									onChange={handleChange}
								/>
								<button
									onClick={() => {
										handleSave(todoList.id);
									}}
								>
									Save
								</button>
							</>
						)}
					</>
				);
			})}
		</>
	);
}
