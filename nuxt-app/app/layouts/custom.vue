<template>
  <div>
    <header style="background-color: blue; color: white; padding: 10px;">
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/items">Items</NuxtLink> |
        <NuxtLink to="/users">Users (Nested)</NuxtLink>
      </nav>
    </header>

  <main style="padding: 20px;">
    <slot />
  </main>

  <footer style="background-color: blue; color: white; padding: 10px; margin-top: 20px;">
    <p>&copy; 2025 My Nuxt App</p>
  </footer>

  </div>
</template>

<style scoped>
nav a{
  margin-right: 10px;
}
</style>
