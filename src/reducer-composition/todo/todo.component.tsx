import * as React from 'react';

// Application
import { Todo } from './todo';


export interface TodoComponentProps {
    todo: Todo;
    onMarkAsCompleted: () => void;
    onMarkAsUncompleted: () => void;
}


export class TodoComponent extends React.Component<TodoComponentProps, undefined> {

    render () {

        let text = <span>{this.props.todo.text}</span>;
        let action = <button
            onClick={this.props.onMarkAsCompleted}>✓</button>;

        if ( this.props.todo.completed ) {
            text = <s>{this.props.todo.text}</s>;
            action = (
            <button
                onClick={this.props.onMarkAsUncompleted}>
                x
            </button>
            );
        }

        return (
            <div id={ `todo-${this.props.todo.id}` }>
                {text} {action}
            </div>
        );

    }

}
