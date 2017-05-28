// Redux
import { createStore, combineReducers } from 'redux';

// Application
import { todoListReducer, TodoListActions } from '../todo-list/todo-list.reducer';
import {
    visibilityFilterReducer,
    VisibilityFilterActions
} from '../visibility-filter/visibility-filter.reducer';
import { VisibilityFilter } from '../visibility-filter/visibility-filter';


const reducers = combineReducers( {
    todoListReducer,
    visibilityFilterReducer
} );

export const store = createStore( reducers );
