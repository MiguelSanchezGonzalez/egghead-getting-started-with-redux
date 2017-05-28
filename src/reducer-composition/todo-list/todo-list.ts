// Application
import { Todo } from '../todo/todo';

import { todoReducer, TodoActions } from '../todo/todo.reducer';


export const add = ( list: Todo[], todo: Todo ): Todo[] => ( [
    ...list,
    todoReducer( todo, { type: TodoActions.create } )
] );


export const toggle = ( list: Todo[], id: number ): Todo[] =>
    list.map( todo => todo.id === id ?
        todoReducer( todo, { type: TodoActions.toggle } ) :
        todo
    );
