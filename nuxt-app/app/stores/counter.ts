import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'sampleCounter'
    }),

    getters: {
        doubleCount: (state) => state.count * 2,
        greeting: (state) => `Hello, ${state.name}! Count is ${state.count}`
    },

    actions: {
        increment(value: number = 1) {
            this.count += value
        },
        async incrementAsync(value: number = 1) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.count += value
        },
    }
})
