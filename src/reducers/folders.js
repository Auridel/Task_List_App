const initialstate = [{title:"Покупки", id: 1, color: "green"},
        {title: "Фронтенд", id: 2, color: "blue"},
        {title: "Фильмы и сериалы", id: 3, color: "pink"},
        {title: "Книги", id: 4, color: "grass"},
        {title: "Личное", id: 5, color: "grey"}
        ];

const folders = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_FOLDER": {
            const {title, color, id} = action.payload;
            const newState = [...state];
            return [...newState, {
                title,
                id,
                color
            }]
        }
        case "DELETE_FOLDER": {
            const newFolders = [...state];
            return [...newFolders.filter(item => item.id !== action.payload)];
        }
        case "RENAME_FOLDER": {
            const newFolders = [...state];
            const idx = newFolders.findIndex(item => item.id === action.payload.id);
            newFolders[idx].title = action.payload.title;
            return [...newFolders];
        }
        default: {
            return state;
        }
    }
};

export default folders;