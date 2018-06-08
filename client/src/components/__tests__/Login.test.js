import React from 'react';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import Login from '../Login';

describe('Login Component', () => {

    it('should render without throwing an error', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(
            <Login 
                onSubmit={onSubmit}
                onChange={onChange}
                errors={{}}
                user={{}} />
        );

        expect(wrapper.find('form.login').exists()).toBe(true)
    })

    it('should render a email input', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(
            <Login 
                onSubmit={onSubmit}
                onChange={onChange}
                errors={{}}
                user={{}} />
        );

        expect(wrapper.find('[name="email"]').length).toEqual(1)
    })

    it('should render a password input', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(
            <Login 
                onSubmit={onSubmit}
                onChange={onChange}
                errors={{}}
                user={{}} />
        );
        
        expect(wrapper.find('[name="password"]').length).toEqual(1)
    })
})