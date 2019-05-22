import Component from './Component.js';

class AddToDo extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('task'),
            };
            onAdd(newToDo);
            
            form.reset();
            document.activeElement.blur();

        });
    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-to-do">
                <label>Task: <input type="checkbox" name="task"></label>
                <button>+</button>
            </form>
        `;
    }
}

export default AddToDo;