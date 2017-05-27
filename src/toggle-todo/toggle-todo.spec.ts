
import * as expect from 'expect';
import * as deepFreeze from 'deepfreeze';
import { toggle, Todo } from './toggle-todo';


export const test = () => {

    const before: Todo = {
        id: 0,
        text: 'Something to do',
        completed: false
    };

    const after: Todo = {
        id: 0,
        text: 'Something to do',
        completed: true
    };

    deepFreeze( before );

    expect(
        toggle( before )
    ).toEqual( after )

    console.log( 'All good!' );

}
