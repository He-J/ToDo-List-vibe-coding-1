import { validateTask } from "../utils/taskUtils";

const STORAGE_KEY = "todo_tasks";

function isStorageAvailable() {
	return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadTasks() {
	if (!isStorageAvailable()) {
		return [];
	}

	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);

		if (!raw) {
			return [];
		}

		const parsed = JSON.parse(raw);

		if (!Array.isArray(parsed)) {
			return [];
		}

		return parsed.filter((task) => validateTask(task));
	} catch {
		return [];
	}
}

export function saveTasks(tasks) {
	if (!isStorageAvailable()) {
		return;
	}

	const safeTasks = Array.isArray(tasks)
		? tasks.filter((task) => validateTask(task))
		: [];

	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(safeTasks));
	} catch {
		// Silently ignore quota/security errors to keep UI responsive.
	}
}

export function clearTasks() {
	if (!isStorageAvailable()) {
		return;
	}

	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch {
		// Silently ignore storage access errors.
	}
}
