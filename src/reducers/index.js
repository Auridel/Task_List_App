const initialstate = {
    "folders": [{title:"Покупки", id: 1, color: "green"},
        {title: "Фронтенд", id: 2, color: "blue"},
        {title: "Фильмы и сериалы", id: 3, color: "pink"},
        {title: "Книги", id: 4, color: "grass"},
        {title: "Личное", id: 5, color: "grey"}],
    "tasks": [
        {id: 1, colId: 2, text: "Изучить JavaScript", done: false},
        {id: 1, colId: 2, text: "Изучить паттерны проектирования", done: false},
        {id: 1, colId: 2, text: "ReactJS Hooks", done: false},
        {id: 1, colId: 2, text: "Redux", done: true},
        {id: 1, colId: 1, text: "Макарошки", done: false},
        {id: 1, colId: 1, text: "Картошку", done: false},
        {id: 1, colId: 1, text: "Биткоины", done: false},
        {id: 1, colId: 3, text: "Мстители", done: false},
        {id: 1, colId: 3, text: "Бетмен", done: false},
        {id: 1, colId: 3, text: "Человек-Паук", done: false},
        {id: 1, colId: 4, text: "Пушкин", done: false},
        {id: 1, colId: 4, text: "Толстой", done: false},
        {id: 1, colId: 4, text: "Достоевский", done: false},
    ]
};

const reducer = (state = initialstate, action) => {
    switch (action.payload) {
        default:
            return state;
    }
};

export default reducer;