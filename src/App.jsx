import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

//   const initialTodoItems = 
//   [
//   {
//     name : "Buy Milk",
//     dueDate : "09/09/2024",
//   },
//   {
//     name : "Go to Placement",
//     dueDate : "09/09/2024",
//   },
//   {
//     name : "I am placed",
//     dueDate : "09/09/2024",
//   },
// ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      {name: itemName, dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);
  };



  return (
    <center className = "todo-container">
      <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0  && <WelcomeMessage  ></WelcomeMessage>}
        <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
