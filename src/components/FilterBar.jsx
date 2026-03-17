const FILTER_OPTIONS = ["all", "active", "completed"];

export default function FilterBar({ currentFilter, onFilterChange }) {
	return (
		<section aria-label="Task filters">
			{FILTER_OPTIONS.map((option) => {
				const isActive = currentFilter === option;

				return (
					<button
						key={option}
						type="button"
						onClick={() => onFilterChange(option)}
						aria-pressed={isActive}
					>
						{option[0].toUpperCase() + option.slice(1)}
					</button>
				);
			})}
		</section>
	);
}
