import { useSetAtom } from "jotai";
import { todoAtom } from "../atoms/todAtm";

const ComponentsB = () => {
  const setTodos = useSetAtom(todoAtom);
  return (
    <div>
      <p>ADD TODO</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: Date.now(),
            text: e.currentTarget.todo.value,
            completed: false,
          };
          setTodos((prevTodos) => [...prevTodos, newTodo]);
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ComponentsB;
