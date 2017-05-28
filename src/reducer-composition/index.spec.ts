import { run as todoRun } from './todo/todo.reducer.spec';
import { run as todoListRun } from './todo-list/todo-list.reducer.spec';
import {
    run as vfilterRun
} from './visibility-filter/visibility-filter.reducer.spec';

todoRun();
todoListRun();
vfilterRun();
