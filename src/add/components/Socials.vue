<template>
  <div class="socials">
    <a href="https://github.com/jasurlive" class="social-link">
      <svg
        class="social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.06 1.82 2.78 1.3 3.46.98.1-.76.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.48-2.4 1.26-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.78.84 1.26 1.92 1.26 3.24 0 4.62-2.8 5.66-5.48 5.96.44.38.82 1.12.82 2.26v3.34c0 .32.22.68.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
        />
      </svg>
    </a>
    <a href="https://t.me/jasurlive_bot">
      <svg
        class="social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm5.46 8.34l-1.98 9.36c-.15.66-.54.82-1.08.54l-3-2.22-1.44 1.38c-.16.16-.3.3-.6.3l.22-3.12 5.66-5.1c.24-.22-.06-.34-.36-.12l-6.98 4.4-3-.94c-.66-.2-.66-.66.14-.96l11.02-4.26c.5-.18.94.12.78.9z"
        />
      </svg>
    </a>
    <a href="https://jasurlive.uz" class="social-link">
      <svg
        class="social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" fill="" />
        <text
          x="12"
          y="16"
          text-anchor="middle"
          font-size="14"
          font-weight="900"
          font-family="'Trebuchet MS'"
          fill="#494949"
        >
          J
        </text>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<style scoped>
.socials {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.social-link {
  text-decoration: none;
}

.social-icon {
  width: 24px;
  height: 24px;
}
</style>
