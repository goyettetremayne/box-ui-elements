import React from 'react';
import sinon from 'sinon';

import PlainButton from '../../plain-button/PlainButton';
import Collapsible from '..';

describe('components/collapsible/Collapsible', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Collapsible isOpen title="foo">
                <span className="test-content">foobar</span>
            </Collapsible>,
        );
    });

    test('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should toggle visibility on click', () => {
        wrapper.find('.collapsible-card-title').simulate('click');
        expect(wrapper.state('isOpen')).toBeFalsy();

        wrapper.find('.collapsible-card-title').simulate('click');
        expect(wrapper.state('isOpen')).toBeTruthy();
    });

    test('should apply correct border class', () => {
        wrapper = shallow(
            <Collapsible isOpen title="foo" isBordered>
                <span>foobar</span>
            </Collapsible>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should apply correct isOpen state', () => {
        wrapper = shallow(
            <Collapsible isOpen={false} title="foo">
                <span>foobar</span>
            </Collapsible>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should apply buttonProps correctly', () => {
        wrapper = shallow(
            <Collapsible isOpen buttonProps={{ a: 1, b: 2 }} title="foo">
                <span>foobar</span>
            </Collapsible>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should render a PlainButton if a button is passed in', () => {
        wrapper = shallow(
            <Collapsible headerButton={<PlainButton />} title="foo">
                <span>foobar</span>
            </Collapsible>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should not render a PlainButton if a button is not passed in', () => {
        wrapper = shallow(
            <Collapsible headerButton={null} title="foo">
                <span>foobar</span>
            </Collapsible>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should fire open and close handlers', () => {
        const closeSpy = sinon.spy();
        const openSpy = sinon.spy();

        wrapper = shallow(
            <Collapsible isOpen onOpen={openSpy} onClose={closeSpy} buttonProps={{ a: 1, b: 2 }} title="foo">
                <span>foobar</span>
            </Collapsible>,
        );

        expect(closeSpy.notCalled).toBe(true);
        expect(openSpy.notCalled).toBe(true);

        wrapper.find('.collapsible-card-title').simulate('click');

        expect(closeSpy.calledOnce).toBe(true);
        expect(openSpy.notCalled).toBe(true);

        wrapper.find('.collapsible-card-title').simulate('click');
        expect(closeSpy.calledOnce).toBe(true);
        expect(openSpy.calledOnce).toBe(true);
    });
});
