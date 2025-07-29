<template>
    <div>
        <button @click="handleLogout">
            ログアウト
        </button>
    </div>
</template>

<script setup>
const authStore = useAuthStore();

const handleLogout = () => {
    authStore.logout();
    console.log('Logged out successfully');
    navigateTo('/login');
}
</script>
