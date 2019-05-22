import ToDoItem from '../js/components/ToDoItem.js';

const test = QUnit.test;

QUnit.module('ToDoItem');

test('template', assert => {
    //Arrange
    const todo = {
        task: 'Feed max',
        completed: false
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox">${todo.task}<span><button class="remove-button">X</button></span>
        </li>
    
    `;

    //Act
    const toDoItem = new ToDoItem({ todo });
    const html = toDoItem.renderTemplate();

    //Assert
    assert.htmlEqual(html, expected);
});