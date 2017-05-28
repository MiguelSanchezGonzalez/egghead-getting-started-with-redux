import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Todo } from './todo/todo';
import { TodoComponent } from './todo/todo.component';


export interface AppComponentProps {
    todos: Todo[];
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

        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind( this );
        this.onAdd = this.onAdd.bind( this );
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

    render () {
        return (
            <div id="todo-app">
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button onClick={this.onAdd}>Add Todo</button>
                <ul>
                    {this.props.todos.map( todo =>
                        <TodoComponent
                            key={todo.id}
                            todo={todo}
                            onMarkAsCompleted={() => this.props.onMarkAsCompleted( todo )}
                            onMarkAsUncompleted={() => this.props.onMarkAsUncompleted( todo )} />
                    )}
                </ul>
            </div>
        );
    }
}


export const render = ( props: AppComponentProps ) =>
    ReactDom.render(
        <AppComponent
            todos={props.todos}
            onAddTodo={props.onAddTodo}
            onMarkAsCompleted={props.onMarkAsCompleted}
            onMarkAsUncompleted={props.onMarkAsUncompleted}
            />,
        document.getElementById( 'app' )
    );
