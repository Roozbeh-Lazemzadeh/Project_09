import React, { useState } from "react";

export default function Tasks({ todoLists, setTodoLists }) {
	function handleDelete(id) {
		const newtodoLists = todoLists.filter((item) => item.id !== id);
		setTodoLists(newtodoLists);
		localStorage.setItem("todoItems", JSON.stringify(newtodoLists));
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
		localStorage.setItem("todoItems", JSON.stringify([...todoLists]));
		setEditValue("");
		setIsEdit(0);
	}

	function handleComplete(id) {
		const temp = [...todoLists];
		const findList = temp.find((item) => item.id == id);
		findList.isCompleted = !findList.isCompleted;
		setTodoLists([...todoLists], findList.isCompleted);
		localStorage.setItem(
			"todoItems",
			JSON.stringify([...todoLists], findList.isCompleted)
		);
	}

	return (
		<>
			{todoLists.map((todoList) => {
				return (
					<div className="li_holder" key={todoList.id}>
						<div>
							<div className="li_container">
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
								</div>
								<div className="buttons">
									<button id="delete" onClick={() => handleDelete(todoList.id)}>
										delete
									</button>
									<button id="Edit" onClick={() => handleEdit(todoList.id)}>
										Edit
									</button>
								</div>
							</div>
						</div>

						{isEdit == todoList.id && (
							<>
								<input
									type="text"
									value={editValue ?? todoList.todo}
									name={editValue ?? todoList.todo}
									onChange={handleChange}
									id="save_input"
								/>
								<button
									onClick={() => {
										handleSave(todoList.id);
									}}
									id="Save"
								>
									Save
								</button>
							</>
						)}
					</div>
				);
			})}
		</>
	);
}
