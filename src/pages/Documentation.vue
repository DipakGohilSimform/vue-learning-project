<script setup></script>

<template>
  <div class="container">
    <h1>Vue Learning</h1>
    <div class="content">
      <p class="description">Explore Vue demos to learn and practice.</p>
      <div class="demo-wrapper">
        <router-link to="/counter-demo" class="demo-link">
          Counter Demo
        </router-link>
        <router-link to="/toggle-demo" class="demo-link">
          Toggle Demo
        </router-link>
        <router-link to="/input-mirror-demo" class="demo-link">
          Input Mirror Demo
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;

  h1 {
    width: 100%;
    text-align: center;
    background: #1c1e21;
    color: white;
    padding: 20px;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 1px 1px 8px #42b883;
    max-width: 620px;

    .description {
      font-size: 18px;
      color: #4a4a4a;
      text-align: center;
      max-width: 400px;
    }

    .demo-wrapper {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .demo-link {
      display: inline-block;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      background: #42b883;
      padding: 8px 16px;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.3s ease;

      &:hover {
        background: #168453;
      }
    }
  }
}
</style>
