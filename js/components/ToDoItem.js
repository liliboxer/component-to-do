import Component from './Component.js';

class ToDoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
       // checking if checkbox is checked?
        return /*html*/ `
            <li>
                <input type="checkbox" ${todo.completed}>${todo.task}
            </li>
        `;
    }
}

export default ToDoItem;