import {ThemeContext} from "./ThemeContext.tsx";
import type {ReactNode} from "react";

export default function ThemeProvider({children} : {children: ReactNode}) {
    const theme = {
        color: "blue",
        backgroundColor: "burlywood",
        text: "black",
        font:"bold small-caps calc(2px +2 vw) 'Time New Roman', serif",
        margin:"0 auto",
        padding:"2%"
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}