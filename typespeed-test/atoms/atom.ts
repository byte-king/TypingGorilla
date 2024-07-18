import { atom } from "recoil";

export const wordsPerMinuteState = atom({
  key: "wordsPerMinute",
  default: 0,
});

export const timerStartState = atom({
  key: "timerStartValue",
  default: true,
});
