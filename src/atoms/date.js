import { atom } from "recoil";

export const dateState = atom({
  key: "dateState",
  default: `${new Date().toLocaleDateString("ko-kR", { dateStyle: "long" })}`,
});

export const classState = atom({
  key: "classState",
  default: [`${new Date().toLocaleDateString("ko-kR", { dateStyle: "long" })}`],
});
