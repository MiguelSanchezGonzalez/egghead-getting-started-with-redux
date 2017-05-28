import { store } from './store/store';
import { TodoListActions } from './todo-list/todo-list.reducer';
import { VisibilityFilterActions } from './visibility-filter/visibility-filter.reducer';
import { VisibilityFilter } from './visibility-filter/visibility-filter';
import { Todo } from './todo/todo';
import { TodoActions } from './todo/todo.reducer';

import { render } from './app';
import * as React from 'react';
import * as ReactDom from 'react-dom';


const getTodos = (): Todo[] => (<any>store.getState()).todoListReducer;

const onMarkAsUncompleted = ( todo: Todo ) =>
    store.dispatch( {
        type: TodoListActions.toggle,
        payload: todo.id
    } )

const onMarkAsCompleted = ( todo: Todo ) =>
    store.dispatch( {
        type: TodoListActions.toggle,
        payload: todo.id
    } );

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
        todos: getTodos(),
        activeFilter: (<any>store.getState()).visibilityFilterReducer,
        onAddTodo,
        onMarkAsCompleted,
        onMarkAsUncompleted
    } );
}

store.subscribe( init );

init();

