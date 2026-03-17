const ID_PREFIX = "task";

export function generateTaskId() {
	const randomPart = Math.random().toString(36).slice(2, 10);
	const timePart = Date.now().toString(36);

	return `${ID_PREFIX}_${timePart}_${randomPart}`;
}

export function createTask(text) {
	const normalizedText = typeof text === "string" ? text.trim() : "";

	return {
		id: generateTaskId(),
		text: normalizedText,
		completed: false,
		createdAt: Date.now(),
	};
}

export function validateTask(task) {
	if (!task || typeof task !== "object") {
		return false;
	}

	const hasValidId = typeof task.id === "string" && task.id.trim().length > 0;
	const hasValidText =
		typeof task.text === "string" && task.text.trim().length > 0;
	const hasValidCompleted = typeof task.completed === "boolean";
	const hasValidCreatedAt = Number.isFinite(task.createdAt);

	return hasValidId && hasValidText && hasValidCompleted && hasValidCreatedAt;
}
