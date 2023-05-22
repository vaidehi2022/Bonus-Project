import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Task.module.css";

function Task() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Do work',
      isEditing: false
    },
    {
      id: 2,
      task: 'Do homework',
      isEditing: false
    },
    {
      id: 3,
      task: 'Learn React',
      isEditing: false
    },
    {
      id: 4,
      task: 'Do assignments',
      isEditing: false
    },
    {
      id: 5,
      task: 'Buy Milk',
      isEditing: false
    },
    {
      id: 6,
      task: 'Learn JsS',
      isEditing: false
    }
  ]);

  const [editTask, setEditTask] = useState('');

  const handleEdit = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isEditing: !task.isEditing, task: editTask };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTask('');
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className={style.taskContainer}>
        <h1>Tasks TO-DO</h1>
        {tasks.map((item, index) => (
          <div key={index} className={style.task}>
            {item.isEditing ? (
              <input
                type="text"
                value={editTask}
                className={style.input}
                onChange={(e) => setEditTask(e.target.value)}
              />
            ) : (
              <p>{item.task}</p>
            )}
            <button
              className={style.btn}
              onClick={() => handleEdit(item.id)}
            >
              {item.isEditing ? "Save" : "Edit"}
            </button>
            <button
              className={style.btn}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
