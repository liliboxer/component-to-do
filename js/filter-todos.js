function filterToDos(todos, filter) {
    const lowerCaseTextFilter = filter.text.toLowerCase();

    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasTask = !lowerCaseTextFilter || lowerCaseTask.includes(lowerCaseTextFilter);
        
        return hasTask;
    });

}

export default filterToDos;