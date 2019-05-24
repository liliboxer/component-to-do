import Component from './Component.js';
import Header from './Header.js';
import ToDoList from './ToDoList.js';
import todosData from '../../js/to-do-data.js';
import AddToDo from './AddToDo.js';
import Filter from './Filter.js';
import filterToDos from '../filter-todos.js';
import api from '../api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();

        let todos;
        const todosInLocalStorage = api.getTodos();
        if(todosInLocalStorage) {
            todos = todosInLocalStorage;
        } else {
            todos = todosData;
        }

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addToDo = new AddToDo({
            onAdd: (newToDo) => {
                todos.unshift(newToDo);
                api.saveTodos(todos);
                toDoList.update({ todos });
            }
        });

        const addToDoDOM = addToDo.render();
        main.appendChild(addToDoDOM);

        const toDoList = new ToDoList({ 
            todos,
            onRemove: (toDoToRemove) => {
                const index = todos.indexOf(toDoToRemove);
                todos.splice(index, 1);
                api.saveTodos(todos);
                toDoList.update({ todos });
            },
            onDone: (toDoDone) => {
                const index = todos.indexOf(toDoDone);
                todos[index].completed = !todos[index].completed;
                api.saveTodos(todos);
                toDoList.update({ todos });
            }
        });

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterToDos(todos, filter);
                api.saveTodos(todos);
                toDoList.update({ todos: filtered });

            }
        });
        main.appendChild(filter.render());

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
