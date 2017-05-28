// Redux
import { Action, Reducer } from 'redux';

// Application
import { Todo } from '../todo/todo';
import { add, toggle } from './todo-list';


export class TodoListActions {
    static add = 'TODO-LIST_ADD';
    static toggle = 'TODO-LIST_TOGGLE';
}

export interface TodoListAction extends Action {
    type: TodoListActions,
    payload?: Todo | number
}

export const todoListReducer: Reducer<Todo[]> =
    ( state: Todo[] = [], action: TodoListAction ): Todo[] => {

    switch ( action.type ) {
        case TodoListActions.add:
            return add( state, <Todo>action.payload );
        case TodoListActions.toggle:
            return toggle( state, <number>action.payload );
        default:
            return state;
    }

};
