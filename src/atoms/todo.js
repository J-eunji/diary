import { atomFamily, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "todoList",
});

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: [{ id: 0 }],
  effects_UNSTABLE: [persistAtom],
});

export const undoneCountFamily = selectorFamily({
  key: "undoneCountFamily",
  get:
    (date) =>
    ({ get }) => {
      const getTodo = get(todoAtomFamily(date));
      const undone = getTodo.filter((todo) => !todo.done).length;
      return undone - 1;
    },
});
