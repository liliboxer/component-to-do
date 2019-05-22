import ToDoItem from '../js/components/ToDoItem.js';

const test = QUnit.test;

QUnit.module('to do');

test('completed item true', (assert) => {
    const todos = {
        task: 'Feed Max',
        completed: true
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" checked>Feed Max
        </li>
    `;

    const html = new ToDoItem(todos);

    assert.htmlEqual(html, expected);

});