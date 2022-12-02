export const addTask = task => ({
    type: "ADD",
    payload: task
});
export const enableTask = id => ({
    type: "ENABLE",
    payload: { id }
});
export const disableTask = id => ({
    type: "DISABLE",
    payload: { id }
})