<template>
  <div id="app">
    <header>
      <h1>Jasur's minimalist life</h1>
    </header>

    <main>
      <Minimalist />
    </main>
  </div>
</template>

<script>
import Minimalist from "../add/components/Minimalist.vue";
import "../add/css/App.css";

export default {
  name: "App",
  components: {
    Minimalist,
  },
};
</script>

<style scoped></style>
