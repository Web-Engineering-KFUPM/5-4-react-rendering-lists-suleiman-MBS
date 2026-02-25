// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* TASK 4 — Interactivity */
  function toggleTask(id) {
    // Return a new tasks array where the matching task has its isDone flipped
    onMutateCourse(index, (tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function deleteTask(id) {
    // Return a new tasks array filtering out the matching task
    onMutateCourse(index, (tasks) => tasks.filter((task) => task.id !== id));
  }

  // TASK 3 variables
  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3: Show “All caught up” badge ONLY when course has tasks AND all are done */}
        {allDone && <span className="badge">All caught up</span>}
      </header>

      <section className="tasksSection">
        {/* TASK 3: Show a message when there are no tasks */}
        {!hasTasks && <p className="muted">No tasks yet.</p>}
        
        <ul className="tasks">
          {/* TASK 2: Render tasks using course.tasks.map */}
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}