<template>
  <div>
    <h1>Welcome to My Nuxt App</h1>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required >
      <input v-model="password" type="password" placeholder="Password" required >
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
const router = useRouter()

const email = ref('');
const password = ref('');

async function handleLogin() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate login delay

  const loginSuccessful = true;

  if (loginSuccessful) {
    router.push('/dashboard');
  } else {
    alert('Login failed');
  }
}

</script>

<style>
</style>
