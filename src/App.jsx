import { createSignal, For, Switch, Match } from "solid-js";
import styles from "./App.module.css";

import TodoListRow from "./components/TodoListRow";
import NavBar from "./components/NavBar";

function App() {
  const [todo, setTodo] = createSignal("");
  const [todoList, setTodoList] = createSignal([]);
  const [selectedNav, setSelectedNav] = createSignal("All Todos");

  const handleClickSave = (e) => {
    e.preventDefault();
    const isAlreadyExit = todoList().some((item) => item.text === todo());
    if (!todo().trim() || isAlreadyExit)
      return alert("not allowed empty or exist todo");
    setTodoList([...todoList(), { text: todo().trim(), completed: false }]);
    setTodo("");
  };

  return (
    <div class={styles.App}>
      <h2>Todo List App</h2>
      <form style={{ "margin-top": "10px" }} onSubmit={handleClickSave}>
        <label for="input">Enter the todo: </label>
        <input
          type="text"
          id="input"
          name="input"
          onInput={(e) => setTodo(e.target.value)}
          value={todo()}
        />
        <button type="submit">Save</button>
      </form>

      <NavBar setNavBar={setSelectedNav} selectedNav={selectedNav} />
      <Switch>
        <Match when={selectedNav() === "All Todos"}>
          <For each={todoList()}>
            {(item) => <TodoListRow {...item} setTodoList={setTodoList} />}
          </For>
        </Match>
        <Match when={selectedNav() === "Completed Todos"}>
          <For each={todoList().filter((item) => item.completed)}>
            {(item) => <TodoListRow {...item} setTodoList={setTodoList} />}
          </For>
        </Match>
      </Switch>
    </div>
  );
}

export default App;
