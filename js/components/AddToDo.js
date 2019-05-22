import Component from './Component.js';

class AddToDo extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;
        const taskInput = form.querySelector('input[name=task]');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('task'),
            };
            onAdd(newToDo);
            
            form.reset();
            taskInput.focus();
            document.activeElement.blur();

        });
    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-to-do">
                <input type="checkbox" name="task">
                <button>+</button>
            </form>
        `;
    }
}

export default AddToDo;