import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Todo } from './todo/todo';
import { TodoComponent } from './todo/todo.component';
import { VisibilityFilter } from './visibility-filter/visibility-filter';
import { TodoListComponent } from './todo-list/todo-list.component';


export interface AppComponentProps {
    todos: Todo[];
    activeFilter: string;
    onAddTodo: ( text: string ) => void;
    onMarkAsCompleted: ( todo: Todo ) => void;
    onMarkAsUncompleted: ( todo: Todo ) => void;
    onFilterChange: ( filter: string ) => void;
}

export interface AppComponentState {
    text: string;
}

export class AppComponent
    extends React.Component<AppComponentProps, AppComponentState> {

    private text: string;

    constructor ( properties ) {
        super( properties );

        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind( this );
        this.onAdd = this.onAdd.bind( this );
        this.onFilterChange = this.onFilterChange.bind( this );
        this.getVisibleTodos = this.getVisibleTodos.bind( this );
    }

    private onChange ( { target: { value } } ) {
        this.setState( {
            text: value
        } );
    }

    private onAdd () {
        this.props.onAddTodo( this.state.text );
        this.setState( {
            text: ''
        } );
    }

    private onFilterChange ( { target: { value } } ) {
        this.props.onFilterChange( value )
    }

    private getVisibleTodos ( filter: VisibilityFilter ) {
        switch ( filter ) {
            case VisibilityFilter.completed:
                return this.props.todos.filter( todo => todo.completed );
            case VisibilityFilter.uncompleted:
                return this.props.todos.filter( todo => !todo.completed );
            default:
                return this.props.todos;
        }
    }

    render () {
        return (
            <div id="todo-app">
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button onClick={this.onAdd}>Add Todo</button>
                <TodoListComponent
                    todos={this.getVisibleTodos( this.props.activeFilter )}
                    todoProps={{
                        onMarkAsCompleted: todo => this.props.onMarkAsCompleted( todo ),
                        onMarkAsUncompleted: todo => this.props.onMarkAsUncompleted( todo )
                    }}/>
                <select
                    value={this.props.activeFilter}
                    onChange={this.onFilterChange}>
                    <option value={VisibilityFilter.all}>All</option>
                    <option value={VisibilityFilter.completed}>Completed</option>
                    <option value={VisibilityFilter.uncompleted}>Uncompleted</option>
                </select>
            </div>
        );
    }
}


export const render = ( props: AppComponentProps ) =>
    ReactDom.render(
        <AppComponent
            todos={props.todos}
            activeFilter={props.activeFilter}
            onAddTodo={props.onAddTodo}
            onMarkAsCompleted={props.onMarkAsCompleted}
            onMarkAsUncompleted={props.onMarkAsUncompleted}
            onFilterChange={props.onFilterChange}
            />,
        document.getElementById( 'app' )
    );
