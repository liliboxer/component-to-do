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
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/ `
            <li>
                <input class="checkbox"type="checkbox" ${checked}>${todo.task}<span><button class="remove-button">X</button></span>
            </li>
        `;
    }


}

export default ToDoItem;
