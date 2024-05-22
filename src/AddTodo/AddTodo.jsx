import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
	const [todoText, setTodoText] = useState("");
	const handeleOnChange = (e) => {
		setTodoText(e.target.value);
	};
	const handleButtonClicked = () => {
		if (todoText) {
			handleAddTodo(todoText);
			setTodoText("");
		}
	};

	return (
		<div className="add-todo-form">
			<input
				className="add-todo-input"
				type="text"
				value={todoText}
				placeholder="Add Todo"
				onChange={handeleOnChange}
			/>
			<button
				className="item-button edit-button"
				onClick={handleButtonClicked}
			>
				Add Task
			</button>
		</div>
	);
};

export default AddTodo;
