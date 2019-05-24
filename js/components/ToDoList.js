import Component from './Component.js';
import ToDoItem from './ToDoItem.js';

class ToDoList extends Component {
    render() {
        const list = this.renderDOM();

        const todos = this.props.todos;
        const onRemove = this.props.onRemove;
        const onDone = this.props.onDone;
        
        todos.forEach(todo => {
            const toDoItem = new ToDoItem({ todo, onRemove, onDone });
            const toDoItemDOM = toDoItem.render();
            list.appendChild(toDoItemDOM);
        });
        
        return list;
    }

    renderTemplate(){
        return /*html*/ `
            <ul id="todos"></ul>
        `;
    }
}

export default ToDoList;
