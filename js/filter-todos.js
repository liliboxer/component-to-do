function filterToDos(todos, filter) {
    const lowerCaseTextFilter = filter.search.toLowerCase();

    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasTask = !lowerCaseTextFilter || lowerCaseTask.includes(lowerCaseTextFilter);
        
        let checks = true;

        if(filter.checks === 'true') {
            checks = todo.completed === true;
        } else if(filter.checks === 'false') {
            checks = todo.completed === false;
        }

        return hasTask && checks;
    });

}

export default filterToDos;
