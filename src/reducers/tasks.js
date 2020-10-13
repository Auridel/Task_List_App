const initialstate = [
        {id: 1, folId: 2, text: "Изучить JavaScript", done: false},
        {id: 2, folId: 2, text: "Изучить паттерны проектирования", done: false},
        {id: 3, folId: 2, text: "ReactJS Hooks", done: false},
        {id: 4, folId: 2, text: "Redux", done: true},
        {id: 5, folId: 1, text: "Макарошки", done: false},
        {id: 6, folId: 1, text: "Картошку", done: false},
        {id: 7, folId: 1, text: "Биткоины", done: false},
        {id: 8, folId: 3, text: "Мстители", done: false},
        {id: 9, folId: 3, text: "Бетмен", done: false},
        {id: 10, folId: 3, text: "Человек-Паук", done: false},
        {id: 11, folId: 4, text: "Пушкин", done: false},
        {id: 12, folId: 4, text: "Толстой", done: false},
        {id: 13, folId: 4, text: "Достоевский", done: false},
    ];

const tasks = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            const {id, folId, text} = action.payload;
            return [...state, {
                id: id,
                folId: folId,
                text: text
            }];
        }
        case "DELETE_TASK": {
            const newTasks = [...state];
            const idx = newTasks.findIndex(item => item.id === action.payload);
            newTasks.splice(idx, 1);
            return [...newTasks];
        }
        case "COMPLETE_TASK": {
            const newTasks = [...state];
            const idx = newTasks.findIndex(item => item.id === action.payload);
            newTasks[idx].done ? newTasks[idx].done = false : newTasks[idx].done = true;
            return [...newTasks];
        }
        default:
            return state;
    }
};

export default tasks;