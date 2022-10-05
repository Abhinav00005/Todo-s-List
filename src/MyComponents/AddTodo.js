import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title || !desc) {
			alert("Title or Description can't be blank");
		} else {
			addTodo(title, desc);
			setDesc("");
			setTitle("");
		}
	};
	return (
		<div className="container my-3">
			<h3 className="text-center">
				<b>Add a Todo</b>
			</h3>
			<form onSubmit={submit}>
				<div className="form-group">
					<label htmlFor="title">Todo Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="form-control"
						id="title"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="todo-desc">Todo Description</label>
					<input
						type="text"
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
						className="form-control"
						id="desc"
					/>
				</div>
				<button type="submit" className="btn btn-sm btn-success">
					Add Todo
				</button>
			</form>
		</div>
	);
};
