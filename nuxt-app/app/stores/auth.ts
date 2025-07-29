import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const authToken = useCookie('authToken', { maxAge: 60 * 60 * 24 * 7 }); // 1 week

export const useAuthStore = defineStore('auth', {
    id: 'auth',
    state: () => ({
        user: null as User | null,
        isLoading: false,
        error: null as string | null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.user,
        isAdmin: (state) => state.user?.role === 'admin',
    },
    actions: {
        setAuth({ user, token }: { user: User; token: string }) {
            this.user = user;
            authToken.value = token;
        },
        clearAuth() {
            this.user = null;
            authToken.value = '';
        },
        async checkAuth() {
            const event = useRequestEvent();
            const token = getCookie(event, 'authToken');
            if (token && !this.user) {
                this.user = { id: 999, name: 'Guest', email: 'guest@example.com', role: 'guest' };
            } else if (!token && this.user) {
                this.clearAuth();
            } else {
                console.log('Auth state consistent:', this.user);
            }
        },
        async login(credentials: { email: string; password: string }) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await $api.post('/auth/login', credentials);
                const { accessToken, user_info } = response.data;
                this.setAuth({ user: user_info, token: accessToken });
                return true;
            } catch (error) {
                this.error = error.message || 'Login failed';
                console.error('Login error:', this.error);
                throw new Error(this.error);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchUserProfile() {
            this.isLoading = true;
            try {
                const response = await $api.get('/auth/me');
                this.user = response.data;
                this.error = null;
            } catch (error) {
                this.clearAuth();
                this.error = error.message || 'Failed to fetch user profile';
                throw new Error(this.error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
