import { create } from "zustand";
import { type ThemeStore } from "../interfaces/types.ts";


export const useThemeStore = create<ThemeStore>((set)=>({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) =>{
        localStorage.setItem("chat-theme", theme);
        set({theme});
    }
}))