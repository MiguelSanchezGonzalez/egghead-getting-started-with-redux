// React
import * as React from 'react';

// Application
import {
    VisibilityFilterComponent
} from '../visibility-filter/visibility-filter.component';


export interface FooterComponentProps {}


export class FooterComponent
    extends React.Component<FooterComponentProps, undefined> {

    public render (): JSX.Element {
        return (
            <footer>
                Filter todos
                <VisibilityFilterComponent/>
            </footer>
        );
    }

}
