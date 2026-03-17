import { useEffect, useMemo, useState } from "react";
import { createTask } from "../utils/taskUtils";
import { loadTasks, saveTasks } from "../services/storageService";

const FILTERS = {
	ALL: "all",
	ACTIVE: "active",
	COMPLETED: "completed",
};

function applyFilter(tasks, filterType) {
	if (filterType === FILTERS.ACTIVE) {
		return tasks.filter((task) => !task.completed);
	}

	if (filterType === FILTERS.COMPLETED) {
		return tasks.filter((task) => task.completed);
	}

	return tasks;
}

export function useTasks() {
	const [tasks, setTasks] = useState(() => loadTasks());
	const [currentFilter, setCurrentFilter] = useState(FILTERS.ALL);

	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	const addTask = (text) => {
		const normalizedText = typeof text === "string" ? text.trim() : "";

		if (!normalizedText) {
			return;
		}

		setTasks((prevTasks) => [createTask(normalizedText), ...prevTasks]);
	};

	const toggleTask = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	const editTask = (id, text) => {
		const normalizedText = typeof text === "string" ? text.trim() : "";

		if (!normalizedText) {
			return;
		}

		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, text: normalizedText } : task
			)
		);
	};

	const filterTasks = (filterType) => {
		const normalizedFilter = typeof filterType === "string" ? filterType.toLowerCase() : "";

		if (
			normalizedFilter !== FILTERS.ALL &&
			normalizedFilter !== FILTERS.ACTIVE &&
			normalizedFilter !== FILTERS.COMPLETED
		) {
			return;
		}

		setCurrentFilter(normalizedFilter);
	};

	const filteredTasks = useMemo(
		() => applyFilter(tasks, currentFilter),
		[tasks, currentFilter]
	);

	return {
		tasks,
		filteredTasks,
		currentFilter,
		addTask,
		toggleTask,
		deleteTask,
		editTask,
		filterTasks,
	};
}

export { FILTERS };
