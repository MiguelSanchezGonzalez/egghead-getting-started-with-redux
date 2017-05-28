import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Todo } from './todo/todo';
import { TodoComponent } from './todo/todo.component';
import { VisibilityFilter } from './visibility-filter/visibility-filter';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {
    VisibilityFilterComponent
} from './visibility-filter/visibility-filter.component';

import { FooterComponent } from './footer/footer.component';

export interface AppComponentProps {
    todos: Todo[];
    activeFilter: string;
    onAddTodo: ( text: string ) => void;
    onMarkAsCompleted: ( todo: Todo ) => void;
    onMarkAsUncompleted: ( todo: Todo ) => void;
}

export interface AppComponentState {
    text: string;
}

export class AppComponent
    extends React.Component<AppComponentProps, AppComponentState> {

    private text: string;

    constructor ( properties ) {
        super( properties );
        this.getVisibleTodos = this.getVisibleTodos.bind( this );
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

                <AddTodoComponent
                    onAddTodo={this.props.onAddTodo}/>

                <TodoListComponent
                    todos={this.getVisibleTodos( this.props.activeFilter )}
                    todoProps={{
                        onMarkAsCompleted: todo => this.props.onMarkAsCompleted( todo ),
                        onMarkAsUncompleted: todo => this.props.onMarkAsUncompleted( todo )
                    }}/>

                <FooterComponent />

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
            />,
        document.getElementById( 'app' )
    );
