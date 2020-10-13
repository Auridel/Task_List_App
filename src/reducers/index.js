const initialstate = {
    "folders": [{title:"Покупки", id: 1, color: "green"},
        {title: "Фронтенд", id: 2, color: "blue"},
        {title: "Фильмы и сериалы", id: 3, color: "pink"},
        {title: "Книги", id: 4, color: "grass"},
        {title: "Личное", id: 5, color: "grey"}],
    "tasks": [
        {id: 1, colId: 2, text: "Изучить JavaScript", done: false},
        {id: 2, colId: 2, text: "Изучить паттерны проектирования", done: false},
        {id: 3, colId: 2, text: "ReactJS Hooks", done: false},
        {id: 4, colId: 2, text: "Redux", done: true},
        {id: 5, colId: 1, text: "Макарошки", done: false},
        {id: 6, colId: 1, text: "Картошку", done: false},
        {id: 7, colId: 1, text: "Биткоины", done: false},
        {id: 8, colId: 3, text: "Мстители", done: false},
        {id: 9, colId: 3, text: "Бетмен", done: false},
        {id: 10, colId: 3, text: "Человек-Паук", done: false},
        {id: 11, colId: 4, text: "Пушкин", done: false},
        {id: 12, colId: 4, text: "Толстой", done: false},
        {id: 13, colId: 4, text: "Достоевский", done: false},
    ]
};

// const initialstate = {
//     "folders": [],
//     "tasks": []
// };

const reducer = (state = initialstate, action) => {
    switch (action.payload) {
        default:
            return state;
    }
};

export default reducer;