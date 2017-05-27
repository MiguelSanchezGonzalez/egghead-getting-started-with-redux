import { Store } from './custom-store';
import { reducer } from './counter-reducer';

export const store = new Store( reducer );
