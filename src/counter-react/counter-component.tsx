import * as React from 'react';


export interface CounterComponentProperties {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}


export class CounterComponent extends React.Component<CounterComponentProperties, undefined> {
    public render () {
        return (
            <div>
                <div>{ this.props.count }</div>
                <div>
                    <button onClick={ this.props.onDecrement }>+</button>
                    <button onClick={ this.props.onIncrement }>-</button>
                </div>
            </div>
        );
    }
}
