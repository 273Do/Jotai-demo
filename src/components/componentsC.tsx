import { useAtomValue } from "jotai";
import { todoAtom } from "../atoms/todAtm";

const ComponentsC = () => {
  const todos = useAtomValue(todoAtom);
  return (
    <div>
      <p>Completed TODOs</p>
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" checked={todo.completed} />
            <p>{todo.text}</p>
          </div>
        ))}
    </div>
  );
};

export default ComponentsC;
