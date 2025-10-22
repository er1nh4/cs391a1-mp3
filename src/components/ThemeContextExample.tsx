import {createContext} from "react";
import type {ThemeTypes} from "../types";

export const ThemeContextExample = createContext<ThemeTypes|null>(null);