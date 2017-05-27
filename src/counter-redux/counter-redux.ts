import * as Redux from 'redux';
import { reducer } from './counter-reducer';

export const store = Redux.createStore( reducer );
