"use strict";

import { refs } from "./js/refs";
import { addTask, deleteTask, initTask } from "./js/tasks";
initTask()

refs.form.addEventListener("submit", addTask
)
refs.taskList.addEventListener("click", deleteTask)