import * as React from 'react';
import { AddTodoComponent } from './add-todo.component';
import { shallow } from "enzyme";
import { Renderer } from 'react-test-renderer';


describe( 'Todo add component', () => {

    test( 'The input should have an empty initial state', () => {

        const wrapper = shallow( <AddTodoComponent /> );

        expect( wrapper.find( 'input' ).props().value ).toEqual( '' );

    } ) ;

    test( 'Changing the input should update its value', () => {

        const wrapper = shallow( <AddTodoComponent /> );

        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'Test' } } );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toEqual( 'Test' );

    } );

    test( 'Adding a todo should clear the input field value', () => {

        const wrapper = shallow( <AddTodoComponent /> );

        const input = wrapper.find( 'input' );
        const button = wrapper.find( 'button' );

        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'Test' } } );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toEqual( 'Test' );

        button.simulate( 'click' );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toEqual( '' );

    })

} )
