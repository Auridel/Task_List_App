const ADD_FOLDER = (title, color, id) => {
    return{
        type: "ADD_FOLDER",
        payload: {
            title,
            color,
            id
        }
    }
};

const DELETE_FOLDER = (id) => {
    return {
        type: "DELETE_FOLDER",
        payload: id
    }
};

const RENAME_FOLDER = (title, id) => {
  return {
      type: "RENAME_FOLDER",
      payload: {
          title,
          id
      }
  }
};

const ADD_TASK = (id, folId, text) => {
    return {
        type: "ADD_TASK",
        payload: {
            id,
            folId,
            text
        }
    }
};

const DELETE_TASK = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
};

const COMPLETE_TASK = (id) => {
    return {
        type: "COMPLETE_TASK",
        payload: id
    }
};

export {
    ADD_FOLDER,
    DELETE_FOLDER,
    RENAME_FOLDER,
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK
};