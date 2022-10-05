import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
	return (
		<>
			<div>
				<h4>{todo.title}</h4>
				<p>{todo.desc}</p>
				<span className="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">
						Task Done
					</label>
					<button
						variant="primary"
						className="btn
						btn-sm btn-danger
						mx-5"
						onClick={() => {
							onDelete(todo);
						}}
					>
						{" "}
						Delete
					</button>
				</span>
			</div>
			<hr />
		</>
	);
};
