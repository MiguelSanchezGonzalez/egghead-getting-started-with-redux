import { store } from './store/store';
import { TodoListActions } from './todo-list/todo-list.reducer';
import { Todo } from './todo/todo';

import { render } from './app';
import * as React from 'react';
import * as ReactDom from 'react-dom';


const getTodos = (): Todo[] => (<any>store.getState()).todoListReducer;


const  onAddTodo = ( text: string ) =>
    store.dispatch( {
        type: TodoListActions.add,
        payload: {
            id: getTodos().length + 1,
            text: text
        }
    } );


const init = () => {
    render( {
        onAddTodo
    } );
}

store.subscribe( init );

init();

