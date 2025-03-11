import { useState } from "react";
import './App.css';
import Task from "./components/Task/Task";


function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Buy milk" },
    { id: "2", text: "Wolk whith dog" },
    { id: "3", text: "Do homework" },

  ]);

  const deleteTask = (id) => {
    const arr = tasks.filter(task => task.id != id)
    setTasks(arr)
  }
  return (
    <>
      {
        tasks.map(task => (
          <Task
           key={task.id}
            task={task}
             deleteTask={id=> deleteTask(id)} />

        ))
      }
    </>
  );
}

export default App;
