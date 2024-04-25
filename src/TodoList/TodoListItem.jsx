const TodoListItem = () => {
  return (
    <li className="todo-item">
      <span className="item-text">Todo List Item Text</span>
      <span className="item-buttons">
        <button className="item-button edit-button">Edit</button>
        <button className="item-button">Delete</button>
      </span>
    </li>
  );
};
export default TodoListItem;
