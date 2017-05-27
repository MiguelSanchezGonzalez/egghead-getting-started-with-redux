// React
import * as React from 'react';
import * as ReactDom from 'react-dom';

// Application
import { CounterComponent } from './counter-component';
import { store, increment, decrement } from './counter-store';


export const render = () =>
    ReactDom.render(
        (<CounterComponent
            count={ store.getState() }
            onIncrement={ increment }
            onDecrement={ decrement }/>),
        document.getElementById( 'app' ) );
