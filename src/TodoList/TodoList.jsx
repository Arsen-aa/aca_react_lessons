import TodoListItem from "./TodoListItem";

const TodoList = ({ todoItems, handleEdit, handleDelete }) => {
	const jsxArray = todoItems.map((obj) => (
		<TodoListItem
			item={obj.item}
			id={obj.id}
			key={obj.id}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	));
	return <ul>{jsxArray}</ul>;
};

export default TodoList;
