import { Reducer, Action } from 'redux';

export interface Todo {
    id: number;
    text: string;
    completed?: boolean;
}


export enum TodoListActions {
    add,
    toggle
}

export interface TodoListAction extends Action {
    type: TodoListActions;
    payload: Todo | number;
}



const todoFactory = ( todo: Todo ): Todo => ( {
    completed: false,
    ...todo
} );

const addTodo = ( list: Todo[], todo: Todo ): Todo[] => ( [
    ...list,
    todo
] );


const toggleTodo = ( todo: Todo ): Todo => ( {
    ...todo,
    completed: !todo.completed
} );


const toggleTodoOnList = ( todos: Todo[], id: number ): Todo[] =>
    todos.map( todo => todo.id === id ? toggleTodo( todo ): todo );


export const todoListReducer: Reducer<Todo[]> =
    ( state: Todo[] = [], action: TodoListAction ): Todo[] => {

    switch ( action.type ) {
        case TodoListActions.add:
            return addTodo( state, todoFactory( <Todo>action.payload ) );
        case TodoListActions.toggle:
            return toggleTodoOnList( state, <number>action.payload );
        default:
            return state;
    }

};
