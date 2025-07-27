import { useAtom } from "jotai";
import { todoAtom } from "../atoms/todAtm";

const ComponentsA = () => {
  const [todos, setTodos] = useAtom(todoAtom);

  const handleCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <p>TODO LIST</p>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
            />
            <p>{todo.text}</p>
          </div>
        ))}
    </div>
  );
};

export default ComponentsA;
