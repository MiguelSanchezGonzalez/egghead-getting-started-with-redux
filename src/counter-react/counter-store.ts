import { createStore } from 'redux';
import { reducer } from './counter-reducer';

export const store = createStore( reducer );

// Short hands
const dispatch = type => store.dispatch( { type: type } );
export const increment = () => dispatch( 'INCREMENT' );
export const decrement = () => dispatch( 'DECREMENT' );
