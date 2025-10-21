import {createContext} from "react";
import type {ThemeTypes} from "../types";

export const ThemeContext = createContext<ThemeTypes|null>(null);