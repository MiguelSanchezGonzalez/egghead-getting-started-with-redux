import * as React from 'react';
import * as ReactDom from 'react-dom';

// Application - components
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FooterComponent } from './footer/footer.component';
import {
    VisibleTodoListComponent
} from './visible-todo-list/visible-todo-list.component';


export class AppComponent
    extends React.Component<undefined, undefined> {

    public render (): JSX.Element {
        return (
            <div id="todo-app">

                <AddTodoComponent/>

                <VisibleTodoListComponent/>

                <FooterComponent />

            </div>
        );
    }
}


export const render = () =>
    ReactDom.render(
        <AppComponent/>,
        document.getElementById( 'app' )
    );
