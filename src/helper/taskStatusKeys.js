const taskStatusKeys = {
    todo: {key: 'to-do', name: 'TO DO'},
    progress: {key: 'in-progress', name: 'IN PROGRESS'},
    review: {key: 'in-review', name: 'IN REVIEW'},
    done: {key: 'done', name: 'DONE'}
};

export const getValidKeys = (taskKey) => {
    switch(taskKey){
        case taskStatusKeys.todo.key: return [
            { name: taskStatusKeys.progress.name, value: taskStatusKeys.progress.key }
        ];
        case taskStatusKeys.progress.key: return [
            { name: taskStatusKeys.todo.name, value: taskStatusKeys.todo.key },
            { name: taskStatusKeys.review.name, value: taskStatusKeys.review.key }
        ];
        case taskStatusKeys.review.key: return [
            { name: taskStatusKeys.progress.name, value: taskStatusKeys.progress.key },
            { name: taskStatusKeys.done.name, value: taskStatusKeys.done.key },
        ];
        case taskStatusKeys.done.key: return [
            { name: taskStatusKeys.review.name, value: taskStatusKeys.review.key },
        ];
        default: return []
    }
}

export default taskStatusKeys;
