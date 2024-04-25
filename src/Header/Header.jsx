const Header = () => {
    console.log("hello from header");
  return (
    <div className="header">
      <h1>ToDo List</h1>
      <input className="add-todo-input search-input" type="text" placeholder="Filter todos" />
    </div>
  );
};
export default Header;
