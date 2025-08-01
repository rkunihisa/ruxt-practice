import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../../app/stores/counter';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Counter Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('increment the count', () => {
        const counterStore = useCounterStore();
        expect(counterStore.count).toBe(0);
        counterStore.increment();
        expect(counterStore.count).toBe(1);
    });

    it('increment the count by a specific value', () => {
        const counterStore = useCounterStore();
        counterStore.increment(5);
        expect(counterStore.count).toBe(5);
    });

    it('doubleCount getter should return double the count', () => {
        const counterStore = useCounterStore();
        counterStore.increment(3);
        expect(counterStore.doubleCount).toBe(6);
    });
});
