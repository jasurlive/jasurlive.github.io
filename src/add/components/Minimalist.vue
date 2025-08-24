<!-- src/components/About.vue -->
<template>
  <div>
    <div class="profile-pic">
      <img src="/atv3.jpg" alt="Profile Picture" />
    </div>
    <div class="aboutme">
      <b>Hola!</b> I'm <b>Jasur</b>, the electronics nerd keeping trains running
      🚄. When I'm not busy with circuits, you'll find me coding, photoshopping,
      video editing, clowning 🤡, eating like there's no tomorrow 🍕🍝,
      podcasting, teaching, and playing chess ♟️. I'm all about traveling ✈️,
      picking up new languages 🏌🏻‍♂️📚, and enjoying life 🍹🏖️ ツ
    </div>
  </div>
</template>

<script>
export default {
  name: "Minimalist",
};
</script>

<style scoped>
.profile-pic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-pic img {
  width: 15rem;
  border-radius: 50%;
  cursor: crosshair;
}

.profile-pic img:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.aboutme {
  font-size: 1.5rem;
  text-align: justify;
  margin-top: 20px;
  padding: 0 10%;
  line-height: 1.7;
}

@media screen and (max-width: 600px) {
  .profile-pic img {
    width: 10rem;
    border-radius: 50%;
    object-fit: contain;
    margin: 1rem auto;
  }
  .aboutme {
    font-size: 1.2rem;
    padding: 0 5%;
  }
}
</style>
