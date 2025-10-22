import type {ReactNode} from "react";
import {ThemeContext} from "./ThemeContext.tsx";

export default function ThemeProvider({children}: { children: ReactNode }) {
    const mainTheme = {
        display: "flex",
        flexDirection: "column",
        width: "70%",
        height: "100vh"
    }

    return (
        <ThemeContext.Provider value={mainTheme}>
            {children}
        </ThemeContext.Provider>
    )
}