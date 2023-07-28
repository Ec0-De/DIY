function Todo({ todo, delTodo }) {
  return (
    <div>
      <button className="rem-list" onClick={delTodo}>
        -
      </button>
      {todo}
    </div>
  );
}

export default Todo;
