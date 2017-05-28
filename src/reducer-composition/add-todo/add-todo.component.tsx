import * as React from 'react';

// Application
import { store } from '../store/store';
import { TodoListActions } from '../todo-list/todo-list.reducer';
import { Todo } from '../todo/todo';


export interface AddTodoComponentState {
    text: string;
}

export class AddTodoComponent
    extends React.Component<undefined, AddTodoComponentState> {


    constructor () {

        super();

        this.state = {
            text: ''
        };

        this.onAddTodo = this.onAddTodo.bind( this );
        this.onChangeText = this.onChangeText.bind( this );

    }


    private onChangeText ( { target: { value } } ) {
        this.setState( {
            text: value
        } );
    }


    private getTodos (): Todo[] {
        return ( store.getState() as any ).todoListReducer;
    }


    private onAddTodo () {

        store.dispatch( {
            type: TodoListActions.add,
            payload: {
                id: this.getTodos().length + 1,
                text: this.state.text
            }
        } );

        this.setState( {
            text: ''
        } );

    }


    render (): JSX.Element {
        return (
            <div>

                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.onChangeText}/>

                <button
                    type="button"
                    onClick={this.onAddTodo}>
                    Add Todo
                </button>

            </div>
        );
    }


}
