

import { refs } from "./js/refs";
import { addTask, deleteTask, initTask } from "./js/tasks";
import { btnThems, initTheme } from "./js/theme-switcher";
initTask();
initTheme();

refs.form.addEventListener("submit", addTask);
refs.taskList.addEventListener("click", deleteTask);
refs.btnThems.addEventListener("click", btnThems);