import Component from './Component.js';
import Header from './Header.js';
import ToDoList from './ToDoList.js';
import todos from '../../js/to-do-data.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const toDoList = new ToDoList({ todos });
        const toDoListDOM = toDoList.render();
        
        main.appendChild(toDoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;