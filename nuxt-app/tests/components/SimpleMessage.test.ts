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
});
