import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: [1],
});

export const undoneCountFamily = selectorFamily({
  key: "undoneCountFamily",
  get:
    (date) =>
    ({ get }) => {
      const getTodo = get(todoAtomFamily(date));
      const undone = getTodo.filter((todo) => !todo.done).length;
      return undone;
    },
});
