function Header({ text, handeleOnChange }) {
	return (
		<div className="header">
			<h1>{text}</h1>
			<input
				className="add-todo-input search-input"
				type="text"
				placeholder="Filter todos"
				onChange={handeleOnChange}
			/>
		</div>
	);
}

export default Header;
