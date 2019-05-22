import Component from './Component.js';

class ToDoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const todo = this.props.todo;
        const onRemove = this.props.onRemove;
        const removeButton = listItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
       // checking if checkbox is checked?
        return /*html*/ `
            <li>
                <input type="checkbox">${todo.task}<span><button>X</button></span>
            </li>
        `;
    }
}

export default ToDoItem;