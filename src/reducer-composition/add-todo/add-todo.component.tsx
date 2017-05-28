import * as React from 'react';


export interface AddTodoComponentProps {
    onAddTodo: ( text: string ) => void;
}

export interface AddTodoComponentState {
    text: string;
}

export class AddTodoComponent
    extends React.Component<AddTodoComponentProps, AddTodoComponentState> {


    constructor ( props: AddTodoComponentProps ) {

        super( props );

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


    private onAddTodo () {

        this.props.onAddTodo( this.state.text );

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
