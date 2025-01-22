<template>
  <div class="auth-layout">
    <div class="auth-container">
      <header>
        <h1>Welcome to Admin Panel</h1>
        <p>Please log in to access your account</p>
      </header>
      <main>
        <router-view></router-view>
        <!-- Render authentication child routes -->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.auth-container {
  width: 400px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

header h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

header p {
  font-size: 14px;
  color: #666;
}

main {
  margin-top: 20px;
}
</style>
