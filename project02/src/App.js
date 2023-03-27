import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onchange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    console.log(todos);
    if (todo === "") {
      return;
    }
    setTodos((arr) => [todo, ...arr]);
    setTodo("");
  };

  return (
    <div>
      <h2>My To Do List !!</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onchange}
          value={todo}
          placeholder={"아무거나 입력하세요"}
        ></input>

        <button>추가</button>
      </form>
      <tr>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </tr>
    </div>
  );
};

export default App;
