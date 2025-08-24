<template>
  <div class="copyright">
    <p>
      © 2011-{{ currentYear }} <a href="https://jasurlive.uz">jasurlive</a> |
      All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.copyright {
  text-align: center;
  font-size: 0.8rem;
  color: #ffffff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9f90a;
}

.copyright a {
  color: #5facff;
  text-decoration: none;
}

.copyright a:hover {
  text-decoration: underline;
}
</style>
