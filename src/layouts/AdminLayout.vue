<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/analytics">Analytics</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </aside>
    <div class="main-content">
      <header class="header">
        <h1>Welcome, Admin</h1>
      </header>
      <main>
        <router-view></router-view>
        <!-- Render admin child routes -->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
}

.sidebar h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  color: #ecf0f1;
  text-decoration: none;
}

.sidebar a.router-link-active {
  font-weight: bold;
  color: #3498db;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 20px;
  background-color: #ecf0f1;
  border-bottom: 1px solid #ddd;
}

main {
  padding: 20px;
  overflow-y: auto;
}
</style>
