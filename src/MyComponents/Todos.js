import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
	let myStyle = {
		minHeight: "70vh"
	};
	return (
		<span className="container my-3 form-group form-check" style={myStyle}>
			<h3 className="text-center">
				<b>Todo's List</b>
			</h3>
			{props.todos.length === 0
				? "No Todos to display!"
				: props.todos.map((todo) => {
						return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />;
				  })}
		</span>
	);
};
