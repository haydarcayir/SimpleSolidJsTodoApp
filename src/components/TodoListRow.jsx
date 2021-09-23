function TodoListRow(props) {
  const deleteTodo = (todo) => {
    props.setTodoList((prevSignal) => [
      ...prevSignal.filter((item) => item.text !== todo),
    ]);
  };

  const handleClickCheckBox = (todo) => {
    props.setTodoList((prevSignal) => {
      const cloned = JSON.parse(JSON.stringify(prevSignal));
      const index = cloned.findIndex((i) => i.text === todo);
      cloned[index].completed = !cloned[index].completed;
      return cloned;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <input
        type="checkbox"
        id="input-checkbox"
        name="input-checkbox"
        onClick={() => handleClickCheckBox(props.text)}
        checked={props.completed}
      />
      <span style={{ margin: "0 10px" }}>{props.text}</span>
      <button onClick={() => deleteTodo(props.text)}>X</button>
    </div>
  );
}

export default TodoListRow;
