import * as expect from "expect";
import * as deepFreeze from 'deepfreeze';

// Application
import { Todo } from '../todo/todo';
import {
    todoListReducer,
    TodoListAction,
    TodoListActions
} from './todo-list.reducer';


const add = () => {

    const before: Todo[] = [];

    const todo: Todo = {
        id: 0,
        text: 'Something to do'
    };

    const action: TodoListAction = {
        type: TodoListActions.add,
        payload: todo
    };

    deepFreeze( before );
    deepFreeze( todo );

    const after: Todo[] = [ {
        id: 0,
        text: 'Something to do',
        completed: false
    } ];

    expect(
        todoListReducer( before, action )
    ).toEqual( after );

};

const toggle = () => {

    const before: Todo[] = [
        {
            id: 0,
            text: 'Something to do',
            completed: true
        },
        {
            id: 1,
            text: 'Another to do',
            completed: false
        },
        {
            id: 3,
            text: 'Something else to do',
            completed: false
        }
    ];


    const after: Todo[] = [
        {
            id: 0,
            text: 'Something to do',
            completed: true
        },
        {
            id: 1,
            text: 'Another to do',
            completed: true
        },
        {
            id: 3,
            text: 'Something else to do',
            completed: false
        }
    ];

    const action = {
        type: TodoListActions.toggle,
        payload: 1
    };

    deepFreeze( before );


    expect(
        todoListReducer( before, action )
    ).toEqual( after );

};


export const run = () => {

    add();
    toggle();

    console.log( '%cTodo-list reducer seems to work fine', 'color: green' );

}
