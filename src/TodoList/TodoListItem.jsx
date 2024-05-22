const TodoListItem = ({ id, item, handleEdit, handleDelete }) => {
	return (
		<li className="todo-item">
			<span className="item-text">
				#{id} {item}
			</span>
			<span className="item-buttons">
				<button
					className="item-button edit-button"
					onClick={() => {
						handleEdit(id);
					}}
				>
					Edit
				</button>
				<button
					className="item-button"
					onClick={() => {
						handleDelete(id);
					}}
				>
					Delete
				</button>
			</span>
		</li>
	);
};
export default TodoListItem;
