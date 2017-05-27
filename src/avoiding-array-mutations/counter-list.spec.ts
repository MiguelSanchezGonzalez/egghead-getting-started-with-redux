import * as expect from 'expect';
import { CounterList } from './counter-list';


const clf = () => new CounterList( [ 0, 20, 10 ] );


const testAddCounter = () => {

    const list = clf();
    const before = list.getCounters();
    const after = [ 0, 20, 10, 1 ];

    expect(
        list.addCounter( 1 )
    ).toEqual( after );

};


const testRemoveCounter = () => {

    const list = clf();
    const before = list.getCounters();
    const after = [ 0, 10 ];

    expect(
        list.removeCounter( 1 )
    ).toEqual( after );

};


const testIncrementCounter = () => {

    const list = clf();
    const before = list.getCounters();
    const after = [ 0, 21, 10 ];

    expect(
        list.incrementCounter( 1 )
    ).toEqual( after );

}


export const test = () => {

    // Tests
    testAddCounter();
    testRemoveCounter();
    testIncrementCounter();

    console.log( 'All good' );

};
