import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

const App = () => {
	const filterTodos = (filterText, todoItems) => {
		const reg = new RegExp(filterText);
		return filterText
			? todoItems.filter((todo) => reg.test(todo.item))
			: todoItems;
	};
	const headerText = "Todo App";
	const [todoItems, setTodoItems] = useState([]);
	const [filterInput, setFilterInput] = useState("");
	const filteredTodoItems = filterTodos(filterInput, todoItems);

	const handeleOnChange = (e) => {
		setFilterInput(e.target.value);
	};
	const handleEdit = (id) => {
		console.log(`EDIT ${id}`);
	};
	const handleDelete = (id) => {
		const updateTodoItems = todoItems.filter((todo) => todo.id !== id);
		setTodoItems(updateTodoItems);
	};
	const handleAddTodo = (text) => {
		todoItems.push({
			item: text,
			id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1,
		});

		setTodoItems([...todoItems]);
	};

	return (
		<div className="app">
			<Header text={headerText} handeleOnChange={handeleOnChange} />
			<TodoList
				todoItems={filteredTodoItems}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
			<AddTodo handleAddTodo={handleAddTodo} />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
