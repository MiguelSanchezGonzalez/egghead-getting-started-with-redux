// React
import * as React from 'react';

// Redux
import { Unsubscribe } from 'redux';


// Application
import { store } from '../store/store';
import { VisibilityFilter } from './visibility-filter';
import { VisibilityFilterActions } from './visibility-filter.reducer';


export interface VisibilityFilterComponentState{
    activeFilter: string;
}


export class VisibilityFilterComponent
    extends React.Component<undefined, VisibilityFilterComponentState> {


    private unsubscribe: Unsubscribe;


    constructor () {

        super();

        this.state = this.getState();

        this.onFilterChange = this.onFilterChange.bind( this );

    }


    public componentDidMount () {
        this.unsubscribe = store.subscribe( () =>
            this.setState( this.getState )
        );
    }


    public componentWillUnmount () {
        this.unsubscribe();
    }


    private getActiveFilter (): string {
        return ( store.getState() as any ).visibilityFilterReducer;
    }


    private getState(): VisibilityFilterComponentState {
        return {
            activeFilter: this.getActiveFilter()
        };
    }

    private onFilterChange ( { target: { value } } ) {
        store.dispatch( {
            type: VisibilityFilterActions.set,
            payload: value
        } )
    }


    render (): JSX.Element {
        return (
            <select
                value={this.state.activeFilter}
                onChange={this.onFilterChange}>
                <option value={VisibilityFilter.all}>All</option>
                <option value={VisibilityFilter.completed}>Completed</option>
                <option value={VisibilityFilter.uncompleted}>Uncompleted</option>
            </select>
        );
    }


}
