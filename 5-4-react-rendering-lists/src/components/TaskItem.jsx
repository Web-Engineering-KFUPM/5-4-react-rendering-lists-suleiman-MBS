// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* TASK 4: Checkbox calls onToggle(task.id) on change and reflects state */}
        <input 
          type="checkbox" 
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        {/* TASK 3: Show <DueBadge /> ONLY when task is NOT done (&&) */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* TASK 2: Display the task title */}
        <span className="title">{task.title}</span>
      </label>

      {/* TASK 4: Delete button calls onDelete(task.id) on click */}
      <button 
        className="ghost" 
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}