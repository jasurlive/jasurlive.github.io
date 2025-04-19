<template>
  <div id="app">
    <header>
      <h1>Jasur's trash projects</h1>
    </header>

    <main>
      <Links />
    </main>
  </div>
</template>

<script>
import Links from "../add/components/Links.vue";
import "../add/css/App.css";

export default {
  name: "App",
  components: {
    Links,
  },
};
</script>

<style scoped></style>
