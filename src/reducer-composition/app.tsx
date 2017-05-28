import * as React from 'react';
import * as ReactDom from 'react-dom';

// Application - components
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FooterComponent } from './footer/footer.component';
import {
    VisibleTodoListComponent
} from './visible-todo-list/visible-todo-list.component';

export interface AppComponentProps {
    onAddTodo: ( text: string ) => void;
}

export class AppComponent
    extends React.Component<AppComponentProps, undefined> {

    render () {
        return (
            <div id="todo-app">

                <AddTodoComponent
                    onAddTodo={this.props.onAddTodo}/>

                <VisibleTodoListComponent/>

                <FooterComponent />

            </div>
        );
    }
}


export const render = ( props: AppComponentProps ) =>
    ReactDom.render(
        <AppComponent
            onAddTodo={props.onAddTodo}/>,
        document.getElementById( 'app' )
    );
