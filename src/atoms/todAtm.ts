import { atom } from "jotai";

type TodoObj = {
  id: number;
  text: string;
  completed: boolean;
};

const todoAtom = atom<TodoObj[]>([
  {
    id: 0,
    text: "todo1",
    completed: false,
  },
  {
    id: 1,
    text: "todo2",
    completed: false,
  },
  {
    id: 2,
    text: "todo3",
    completed: false,
  },
]);

export { type TodoObj, todoAtom };
