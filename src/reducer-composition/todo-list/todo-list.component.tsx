// React
import * as React from 'react';

// Application
import { Todo } from '../todo/todo';
import { TodoComponent, TodoComponentOutputs } from '../todo/todo.component';


export interface TodoListComponentProps {
    todos: Todo[];
    todoProps: TodoComponentOutputs;
}

export class TodoListComponent
    extends React.Component<TodoListComponentProps, undefined> {

    renderTodo ( todo: Todo, props: TodoComponentOutputs ): JSX.Element {
        return (
            <TodoComponent
                key={todo.id}
                todo={todo}
                onMarkAsCompleted={ () => props.onMarkAsCompleted( todo )}
                onMarkAsUncompleted={ () => props.onMarkAsUncompleted( todo )}/>
        );
    }

    render (): JSX.Element {
        return (
            <ul>
                {this.props.todos.map(
                    todo => this.renderTodo( todo, this.props.todoProps )
                )}
            </ul>
        );
    }

}
