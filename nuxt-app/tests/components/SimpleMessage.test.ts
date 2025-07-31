import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SimpleMessage from '../../app/components/SimpleMessage.vue';

describe('SimpleMessage.vue', () => {
    it('renders the message prop', () => {
        const wrapper = mount(SimpleMessage, {
            props: {
                name: 'Test User'
            }
        });

        expect(wrapper.text()).toBe('Hello, Test User');
    });

    it('renders the default message when no name is provided', () => {
        const wrapper = mount(SimpleMessage, {
            props: {
                name: 'Smith',
                greeting: 'Welcome to the app!'
            }
        });

        expect(wrapper.text()).toBe('Welcome to the app!, Smith');
    });
});
