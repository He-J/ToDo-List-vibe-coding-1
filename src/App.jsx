import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {
    tasks,
    currentFilter,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    filterTasks,
  } = useTasks();

  return (
    <main>
      <h1>ToDo List</h1>
      <TaskInput onAddTask={addTask} />
      <FilterBar currentFilter={currentFilter} onFilterChange={filterTasks} />
      <TaskList
        tasks={tasks}
        filter={currentFilter}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </main>
  );
}

export default App;
