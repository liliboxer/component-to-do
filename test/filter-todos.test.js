import filterToDos from '../js/filter-todos.js';

const test = QUnit.test;
QUnit.module('filter');

const todos = [
    {
        task: 'Feed max',
        completed: false
    },
    {
        task: 'Water plants',
        completed: false
    },
    {
        task: 'Feed self',
        completed: true
    }
];

test('string filter', assert => {
    const filter = {
        text: 'w'
    };

    const filtered = filterToDos(todos, filter);

    assert.deepEqual(filtered, [{
        task: 'Water plants',
        completed: false
    }]);

});