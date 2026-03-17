import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
	const [isEditing, setIsEditing] = useState(false);
	const [draftText, setDraftText] = useState(task.text);

	const saveEdit = () => {
		const normalizedText = draftText.trim();

		if (!normalizedText) {
			setDraftText(task.text);
			setIsEditing(false);
			return;
		}

		if (normalizedText !== task.text) {
			onEdit(task.id, normalizedText);
		}

		setIsEditing(false);
	};

	const cancelEdit = () => {
		setDraftText(task.text);
		setIsEditing(false);
	};

	return (
		<li>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => onToggle(task.id)}
				aria-label={`Toggle task ${task.text}`}
			/>

			{isEditing ? (
				<input
					type="text"
					value={draftText}
					onChange={(event) => setDraftText(event.target.value)}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							saveEdit();
						}

						if (event.key === "Escape") {
							cancelEdit();
						}
					}}
					aria-label="Edit task text"
				/>
			) : (
				<span>{task.text}</span>
			)}

			{isEditing ? (
				<>
					<button type="button" onClick={saveEdit} aria-label="Save task edit">
						Save
					</button>
					<button type="button" onClick={cancelEdit} aria-label="Cancel task edit">
						Cancel
					</button>
				</>
			) : (
				<button
					type="button"
					onClick={() => setIsEditing(true)}
					aria-label="Edit task"
				>
					Edit
				</button>
			)}

			<button
				type="button"
				onClick={() => onDelete(task.id)}
				aria-label={`Delete task ${task.text}`}
			>
				Delete
			</button>
		</li>
	);
}
