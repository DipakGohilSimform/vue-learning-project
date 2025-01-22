<template>
  <div>
    <h1>User Page</h1>
    <p>User ID: {{ id }}</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  props: ["id"],
};
</script>
