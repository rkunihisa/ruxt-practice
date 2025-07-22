import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const requireAuth = to.meta.requiresAuth;

  if(requireAuth && !authStore.isAuthenticated) {
    // Redirect to login page if not authenticated
    return navigateTo('/login?redirect=' + encodeURIComponent(to.fullPath));
  }

  console.log('Middleware: Auth check passed for route:', to.fullPath);
})
