const api = {
    storage: localStorage,
    saveTodos(todo) {
        const json = JSON.stringify(todo);
        api.storage.setItem('todo', json);
    },
    getTodos() {
        const json = api.storage.getItem('todo');
        const todo = JSON.parse(json);
        return todo;
    },
};

export default api;