// React
import * as React from 'react';

// Redux
import { Unsubscribe } from 'redux';

// Application
import { store } from '../store/store';
import { Todo } from '../todo/todo';
import { VisibilityFilter } from '../visibility-filter/visibility-filter';

import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListActions } from '../todo-list/todo-list.reducer';

interface VisibleTodoListComponentState {
    todos: Todo[];
    filter: string;
}

export class VisibleTodoListComponent
    extends React.Component<undefined, VisibleTodoListComponentState> {


    private unsubscribe: Unsubscribe;

    constructor () {
        super();

        this.state = this.getState();
    }


    public componentDidMount () {
        this.unsubscribe = store.subscribe( () =>
            this.setState( this.getState )
        );
    }


    public componentWillUnmount () {
        this.unsubscribe();
    }


    private getState (): VisibleTodoListComponentState {
        return {
            todos: this.filterTodos( this.getTodos(), this.getFilter() ),
            filter: this.getFilter()
        };
    }


    private getFilter (): string {
        return ( (store.getState() as any).visibilityFilterReducer as string );
    }


    private getTodos (): Todo[] {
        return ( (store.getState() as any).todoListReducer as Todo[] );
    }


    private filterTodos ( todos: Todo[], filter: string ): Todo[] {
        switch ( filter ) {
            case VisibilityFilter.completed:
                return todos.filter( todo => todo.completed );
            case VisibilityFilter.uncompleted:
                return todos.filter( todo => !todo.completed );
            default:
                return todos;
        }
    }


    private onMarkAsCompleted ( todo: Todo ) {
        store.dispatch( {
            type: TodoListActions.toggle,
            payload: todo.id
        } );
    }

    private onMarkAsUncompleted ( todo: Todo ) {
        store.dispatch( {
            type: TodoListActions.toggle,
            payload: todo.id
        } );
    }


    public render (): JSX.Element {
        return (
            <TodoListComponent
                todos={this.state.todos}
                todoProps={{
                    onMarkAsCompleted: todo => this.onMarkAsCompleted( todo ),
                    onMarkAsUncompleted: todo => this.onMarkAsUncompleted( todo )
                }}/>
        );
    }

}
