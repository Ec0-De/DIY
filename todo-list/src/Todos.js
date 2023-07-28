import Todo from "./Todo";

function Todos({ list, delTodo }) {
  return (
    <div className="todos">
      {list.map((item, index) => (
        <Todo key={index} todo={item} delTodo={() => delTodo(index)} />
      ))}
    </div>
  );
}

export default Todos;
