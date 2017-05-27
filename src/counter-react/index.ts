
import { store } from './counter-store';
import { render } from './app-render';

store.subscribe( render );
render();
