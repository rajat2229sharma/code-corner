import taskStatusKeys from "../../helper/taskStatusKeys"
import actionAll from "./action"

export const addTask = (title) => {
    return {
        type: actionAll.ADD_TASK,
        payload: {
            id: new Date().getTime().toString(),
            title: title,
            status: taskStatusKeys.todo.key,
        },
    }
}

export const removeTask = (id) => {
    return {
        type: actionAll.REMOVE_TASK,
        id,
    }
}

export const updateTask = (updatedData) => {
    return {
        type: actionAll.UPDATE_TASK,
        payload: updatedData,
    }
}