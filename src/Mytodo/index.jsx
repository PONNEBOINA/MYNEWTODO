import { useState, useEffect } from "react";
import "./index.css";

const MyTodo = ({ eachTodo, deletetodo, toggleButton, updatenewText }) => {
  const [newText, setNewText] = useState(eachTodo.text);

  useEffect(() => {
    console.log("Todo text changed", eachTodo.text); // Debug
    setNewText(eachTodo.text);
  }, [eachTodo.text, eachTodo.isEditing]);

  const handleSave = () => {
    console.log("Saving new text:", newText); // Debug
    updatenewText(eachTodo.id, newText);
    toggleButton(eachTodo.id);
  };

  return (
    <li className="todo-box">
      <div className="todo-text-line">
        {eachTodo.isEditing ? (
          <input
            className="todo-input"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span className="todo-text">{eachTodo.text}</span>
        )}
      </div>
      <div className="todo-buttons">
        {eachTodo.isEditing ? (
          <button onClick={handleSave} className="save-btn">Save</button>
        ) : (
          <button onClick={() => toggleButton(eachTodo.id)} className="edit-btn">Edit</button>
        )}
        <button onClick={() => deletetodo(eachTodo.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
};

export default MyTodo;
