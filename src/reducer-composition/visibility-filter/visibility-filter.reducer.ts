// Redux
import { Action, Reducer } from 'redux';

// Application
import { VisibilityFilter } from './visibility-filter';


export enum VisibilityFilterActions {
    set
}

export interface VisibilityFilterAction {
    type: VisibilityFilterActions,
    payload: VisibilityFilter
}


export const visibilityFilterReducer: Reducer<VisibilityFilter> =
    ( state: VisibilityFilter = VisibilityFilter.all, action: VisibilityFilterAction ): VisibilityFilter => {
    switch ( action.type ) {
        case VisibilityFilterActions.set:
            return action.payload;
        default:
            return state;
    }
}
