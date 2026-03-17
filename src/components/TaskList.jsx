import TaskItem from "./TaskItem";

function getFilteredTasks(tasks, filter) {
	const normalizedFilter = typeof filter === "string" ? filter.toLowerCase() : "all";

	if (normalizedFilter === "active") {
		return tasks.filter((task) => !task.completed);
	}

	if (normalizedFilter === "completed") {
		return tasks.filter((task) => task.completed);
	}

	return tasks;
}

export default function TaskList({ tasks, filter, onToggle, onDelete, onEdit }) {
	const safeTasks = Array.isArray(tasks) ? tasks : [];
	const visibleTasks = getFilteredTasks(safeTasks, filter);

	if (visibleTasks.length === 0) {
		return <p>No tasks found.</p>;
	}

	return (
		<ul>
			{visibleTasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					onToggle={onToggle}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</ul>
	);
}
