<template>
  <div id="app">
    <header>
      <h1>Jasur's minimalist page</h1>
    </header>

    <main>
      <Minimalist />
      <Socials />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Minimalist from "../add/components/Minimalist.vue";
import "../add/css/App.css";
import Socials from "../add/components/Socials.vue";
import Copyright from "../add/components/Copyright.vue";

export default {
  name: "App",
  components: {
    Minimalist,
    Socials,
    Copyright,
  },
};
</script>

<style scoped></style>
