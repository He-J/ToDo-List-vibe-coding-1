import { useState } from "react";

export default function TaskInput({ onAddTask }) {
	const [text, setText] = useState("");

	const submitTask = () => {
		const normalizedText = text.trim();

		if (!normalizedText) {
			return;
		}

		onAddTask(normalizedText);
		setText("");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			submitTask();
		}
	};

	return (
		<section>
			<label htmlFor="task-input">New task</label>
			<input
				id="task-input"
				type="text"
				value={text}
				onChange={(event) => setText(event.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Add a task"
			/>
			<button type="button" onClick={submitTask} aria-label="Add task">
				Add
			</button>
		</section>
	);
}
