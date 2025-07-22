
<template>
  <div class="layout-container">
    <aside class="sidebar">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/items">Items</NuxtLink>
        <NuxtLink to="/users">Users (Nested)</NuxtLink>
      </nav>
      <div class="sidebar-footer">
        <p>&copy; 2025 My Nuxt App</p>
      </div>
    </aside>
    <div class="main-content">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 200px;
  background: #f0f0f0;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.sidebar nav {
  display: flex;
  flex-direction: column;
}
.sidebar a {
  margin-bottom: 16px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
.sidebar a:hover {
  color: #42b983;
}
.sidebar-footer {
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
  font-size: 0.95em;
  color: #888;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  padding: 32px;
}
</style>
