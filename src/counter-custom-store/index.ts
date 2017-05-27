
import { store } from './counter-store';
import { CounterComponent } from './counter-component';

const counter = new CounterComponent( store.getState() );

counter.onDecrementClick = () => store.dispatch( { type: 'DECREMENT' } );
counter.onIncrementClick = () => store.dispatch( { type: 'INCREMENT' } );

const render = () => counter.setCount( store.getState() );

store.subscribe( render );
render();

