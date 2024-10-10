import { createStore } from "redux";
import { CounterReducer } from "./reducer/CounterReducer";
export const store = createStore(CounterReducer);