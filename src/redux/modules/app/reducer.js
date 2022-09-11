import produce from "immer";
import { initialState } from "./states";
import * as types from './types';
export const app = produce((draft, { type, payload }) => {
  switch (type) {
  }
}, initialState);
