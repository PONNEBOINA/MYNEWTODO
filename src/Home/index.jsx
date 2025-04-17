import { useState, useEffect } from "react";
import Header from "../Header";
import MyTodo from "../Mytodo";
import "./index.css";



const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

 
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    console.log("Saved todos from localStorage:", saved);  
    if (saved) {
      setTodoList(JSON.parse(saved));
    } else {
      setTodoList([]);
     
    }
  }, []);

  
  useEffect(() => {
    console.log("Saving todos to localStorage:", todoList); // Debug
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = () => {
    if (todo.trim() === "") {
      setError("Type something to add");
    } else {
      const newTodo = {
        id: Date.now(),
        text: todo,
        isEditing: false
      };
      setTodoList((prev) => [...prev, newTodo]);
      setTodo("");
      setError("");
    }
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleEdit = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateText = (id, newText) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="input2-container">
          <input
            className="inputaddtodo"
            type="text"
            placeholder=" Add todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleAddTodo} className="addbtn">ADD TODO</button>
           

         

        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} 
        <ul className="ul-list">
          {todoList.length === 0 ? (
            <li>No todos available</li>
          ) : (
            todoList.map((todo) => (
              <MyTodo
                key={todo.id}
                eachTodo={todo}
                deletetodo={deleteTodo}
                toggleButton={toggleEdit}
                updatenewText={updateText}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
