import { useState, useEffect } from "react";
import styles from "./app.module.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      });
  });

  return (
    <div className={styles.app}>
      {todos.map(({ id, title }) => (
        <div className={styles.todos} key="id">
          {id}-{title}
        </div>
      ))}
    </div>
  );
};

export default App;
