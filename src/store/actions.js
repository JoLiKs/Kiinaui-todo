export const addTask = task => ({
    type: "ADD",
    payload: task
});
export const clearTasks = () => ({
    type: "CLEAR"
});
export const disableTask = id => ({
    type: "TOGGLE",
    payload: { id }
})