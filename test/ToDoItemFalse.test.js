import ToDoItem from '../js/components/ToDoItem.js';

const test = QUnit.test;

QUnit.module('to do');

test('completed item false', (assert) => {
    const todos = {
        task: 'Feed Max',
        completed: false
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" >Feed Max
        </li>
    `;

    const html = new ToDoItem(todos);

    assert.htmlEqual(html, expected);

});