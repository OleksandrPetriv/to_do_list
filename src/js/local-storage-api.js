export const LS_KEYS = {
    tasks: 'tasks',
};

export function saveTask(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getTask(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}