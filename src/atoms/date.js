import { atom } from "recoil";
import { localStorageEffect } from "../utilities/localStorage";

export const dateState = atom({
  key: "dateState",
  default: `${new Date().toLocaleDateString("ko-kR", { dateStyle: "long" })}`,
  effects: [localStorageEffect("date")],
});

export const classState = atom({
  key: "classState",
  default: [`${new Date().toLocaleDateString("ko-kR", { dateStyle: "long" })}`],
  effects: [localStorageEffect("class")],
});
