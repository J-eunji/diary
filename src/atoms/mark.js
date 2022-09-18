import { atom } from "recoil";
import { localStorageEffect } from "../utilities/localStorage";

export const doneMark = atom({
  key: "doneMark",
  default: [],
  effects: [localStorageEffect("done")],
});

export const undoneMark = atom({
  key: "undoneMark",
  default: [],
  effects: [localStorageEffect("undone")],
});
