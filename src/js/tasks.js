import { nanoid } from "nanoid";
import { renderTask } from "./render-tasks";
import { getTask, saveTask, LS_KEYS } from "./local-storage-api";

let tasks = getTask(LS_KEYS.tasks) || [];
export function addTask(event) {
    event.preventDefault();
    const title = event.target.elements.taskName.value.trim();
    const description = event.target.elements.taskDescription.value.trim();
    if (title === "" || description === "") {
        alert("Заповніть усі поля");
        return;
    }
    const task = { id: nanoid(), title, description };
    tasks.push(task);
    renderTask(tasks)
    saveTask(LS_KEYS.tasks, tasks)
    event.target.reset();
}

export function initTask() {
    renderTask(tasks);
}

export function deleteTask(event) {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    // if (!event.target.classList.contains("task-list-item-btn")) {
    //     return
    // }
    const id = event.target.closest("li").id;
    tasks = tasks.filter(task => task.id !== id)
    renderTask(tasks);
    saveTask(LS_KEYS.tasks, tasks)
}