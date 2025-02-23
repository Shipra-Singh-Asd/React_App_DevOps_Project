import React, { useState } from "react";
import Form from "./Components/Form";
import Landing from "./Components/Landing";
import Todolist from "./Components/Todolist";
import DarkModeToggle from "./Components/toggle"; // Import the toggle

function App() {
  const [todos, setTodos] = useState([]);
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="App">
      {showApp ? (
        <div className="header">
          <h1>To-Do App</h1>
          <h3>Your Reminder</h3>
          <DarkModeToggle /> {/* Add Dark Mode Toggle Here */}
          <div>
            <Form todos={todos} setTodos={setTodos} />
          </div>
          <div>
            <Todolist todos={todos} setTodos={setTodos} />
          </div>
        </div>
      ) : (
        <Landing setShowApp={setShowApp} />
      )}
    </div>
  );
}

export default App;