import { Reducer, Action } from 'redux';

export interface Todo {
    id: number;
    text: string;
    completed?: boolean;
}


export enum TodoListActions {
    add
}

export interface TodoListAction extends Action {
    type: TodoListActions;
    payload: Todo;
}



const todoFactory = ( todo: Todo ): Todo => ( {
    completed: false,
    ...todo
} );

const addTodo = ( list: Todo[], todo: Todo ): Todo[] => ( [
    ...list,
    todo
] );


export const todoListReducer: Reducer<Todo[]> =
    ( state: Todo[] = [], action: TodoListAction ): Todo[] => {

    switch ( action.type ) {
        case TodoListActions.add:
            return addTodo( state, todoFactory( action.payload ) );
        default:
            return state;
    }

};
