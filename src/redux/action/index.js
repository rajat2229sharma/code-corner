import actionAll from "./action"

export const addTask = (data) => {
    return {
        type: actionAll.ADD_TASK,
        payload: {
            id: new Date().getTime().toString(),
            data: data,
        },
    }
}

export const removeTask = (id) => {
    return {
        type: actionAll.REMOVE_TASK,
        id
    }
}

export const updateTask = (id, data) => {
    return {
        type: actionAll.UPDATE_TASK,
        payload: {
            updateId: id,
            updateData: data,
        },
    }
}