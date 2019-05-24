const api = {
    storage: localStorage,
    saveTodo(todo) {
        const json = JSON.stringify(todo);
        api.storage.setItem('todo', json);
    },
    getTodo() {
        const json = api.storage.getItem('todo');
        const todo = JSON.parse(json);
        return todo;
    },
};

export default api;