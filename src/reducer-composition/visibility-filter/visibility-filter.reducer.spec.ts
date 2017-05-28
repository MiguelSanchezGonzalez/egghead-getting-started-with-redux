// Testing
import * as expect from 'expect';

// Application
import {
    VisibilityFilterActions,
    visibilityFilterReducer,
    VisibilityFilterAction
} from './visibility-filter.reducer';
import { VisibilityFilter } from './visibility-filter';


const set = () => {

    const before = VisibilityFilter.all;
    const after = VisibilityFilter.completed;
    const action: VisibilityFilterAction = {
        type: VisibilityFilterActions.set,
        payload: VisibilityFilter.completed
    };

    expect(
        visibilityFilterReducer( before, action )
    ).toEqual( after );

};

export const run = () => {

    set();

    console.log( '%cVisibility filter reducer seems to work fine', 'color: green' );

}

