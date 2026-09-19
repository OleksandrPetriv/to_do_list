

import { getTask, LS_KEYS, saveTask } from "./local-storage-api";

export function btnThems() {
    if (document.body.classList.contains("theme-dark")) {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
        saveTask(LS_KEYS.theme, "light");
    }
    else {
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
        saveTask(LS_KEYS.theme, "dark");
    }
}
export function initTheme() {
    if (getTask(LS_KEYS.theme) === "light") {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark")
    }
}
