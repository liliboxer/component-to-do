import Component from './Component.js';

class ToDoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const todo = this.props.todo;
        const onRemove = this.props.onRemove;
        const onDone = this.props.onDone;
        const removeButton = listItem.querySelector('button');
        const checkbox = listItem.querySelector('input[name=checkbox]');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        checkbox.addEventListener('change', () => {
            onDone(todo);
        });

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/ `
            <li>
                <input class="checkbox"type="checkbox"name="checkbox" ${checked}>${todo.task}<span><button class="remove-button">X</button></span>
            </li>
        `;
    }
}

export default ToDoItem;
