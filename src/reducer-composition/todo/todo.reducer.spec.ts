// Testing
import * as expect from 'expect';
import * as deepFreeze from 'deepfreeze';

// Application
import { Todo } from './todo';
import { todoReducer, TodoAction, TodoActions } from './todo.reducer';


//
// Tests
//

const add = () => {

    const before: Todo = {
        id: 0,
        text: 'Something to do'
    };

    const after: Todo = {
        id: 0,
        text: 'Something to do',
        completed: false
    };

    const action: TodoAction = {
        type: TodoActions.create,
        payload: before
    };

    deepFreeze( before );
    deepFreeze( action );

    expect(
        todoReducer( undefined, action )
    ).toEqual( after );

};

const toggle = () => {

    const before = {
        id: 0,
        text: 'Something to do',
        completed: false
    };

    const after = {
        id: 0,
        text: 'Something to do',
        completed: true
    };

    const action: TodoAction = {
        type: TodoActions.toggle
    };

    deepFreeze( before );

    expect(
        todoReducer( before, action )
    ).toEqual( after );

}


export const run = () => {

    add();
    toggle();

    console.log( '%cTodo reducer seems to work fine', 'color: green' );

}
