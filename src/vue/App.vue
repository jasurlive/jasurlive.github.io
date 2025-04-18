<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Jasur's trash projects</h1>
    </header>

    <nav>
      <button @click="view = 'home'">Home</button>
    </nav>

    <main>
      <component :is="currentView" />
    </main>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import About from "../components/About.vue";

export default {
  name: "App",
  data() {
    return {
      view: "home",
    };
  },
  computed: {
    currentView() {
      return this.view === "home" ? Home : About;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
nav button {
  margin: 0 10px;
}
</style>
