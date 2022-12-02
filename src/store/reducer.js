let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: ++lastId,
                title: action.payload.title,
                completed: false,
            }];
        case "DISABLE":
            return state.map(task => {
                if (task.id === action.payload.id)
                    return { ...task, completed: !task.completed }
                return task;
            });
        case "ENABLE":
            return state.filter(task => action.payload.id !== task.id);
        default:
            return state;
    }
}