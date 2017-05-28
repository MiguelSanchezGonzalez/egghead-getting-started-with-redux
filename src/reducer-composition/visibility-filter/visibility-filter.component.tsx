// React
import * as React from 'react';

// Application
import { VisibilityFilter } from './visibility-filter';


export interface VisibilityFilterComponentProps {
    activeFilter: string;
    onFilterChange: ( state: string ) => void;
}


export class VisibilityFilterComponent
    extends React.Component<VisibilityFilterComponentProps, undefined> {


    constructor ( props: VisibilityFilterComponentProps ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );
    }


    private onFilterChange ( { target: { value } } ) {
        this.props.onFilterChange( value );
    }


    render (): JSX.Element {
        return (
            <select
                value={this.props.activeFilter}
                onChange={this.onFilterChange}>
                <option value={VisibilityFilter.all}>All</option>
                <option value={VisibilityFilter.completed}>Completed</option>
                <option value={VisibilityFilter.uncompleted}>Uncompleted</option>
            </select>
        );
    }


}
