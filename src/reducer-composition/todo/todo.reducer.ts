import {
    Action,
    Reducer
} from 'redux';

// Application
import { Todo, initTodo, toggleTodo } from './todo';


export class TodoActions {
    static create = 'TODO-NEW';
    static toggle = 'TODO-TOGGLE';
}

export interface TodoAction extends Action {
    type: TodoActions,
    payload?: Todo
}

export const todoReducer: Reducer<Todo> =
    ( state: Todo | undefined, action: TodoAction ): Todo => {
    switch ( action.type ) {
        case TodoActions.create:
            return initTodo( action.payload || state );
        case TodoActions.toggle:
            return toggleTodo( state );
        default:
            return state;
    }
}
