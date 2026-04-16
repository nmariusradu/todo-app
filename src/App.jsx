import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
             Delete
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;