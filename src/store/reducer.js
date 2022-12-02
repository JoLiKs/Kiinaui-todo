let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: ++lastId,
                title: action.payload.title,
                completed: false,
            }];
        case "TOGGLE":
            return state.map(task => {
                if (task.id === action.payload.id)
                    return { ...task, completed: !task.completed }
                return task;
            });
        case "CLEAR":
            return state.forEach(i => state.unshift());
        default:
            return state;
    }
}