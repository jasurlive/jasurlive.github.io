<template>
  <div class="profile-pic">
    <img src="/atv3.jpg" alt="Profile Picture" />
  </div>
  <div class="container-web-projects">
    <a
      v-for="(project, index) in webProjectsData"
      :key="index"
      :href="project.url"
      class="web-project-link"
    >
      <div class="link-icon">{{ project.icon }}</div>
      {{ project.description }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      webProjectsData: [
        {
          name: "CD IELTS Preparation",
          url: "https://ieltslive.vercel.app/",
          icon: "💻",
          description: "CD IELTS Prep (IELTSLive) 🆕",
        },
        {
          name: "Music Playlist (DJ)",
          url: "https://playlistgo.vercel.app/",
          icon: "🎧",
          description: "DJ YouTube (PlaylistGo) 🆕",
        },
        {
          name: "Travel Map",
          url: "https://destinero.vercel.app/",
          icon: "🗺️",
          description: "Travel Map (Destinero) 🆕",
        },
        {
          name: "uzChess.vercel.app",
          url: "https://uzchess.vercel.app",
          icon: "♟️",
          description: "Play Chess (uzChess) 🆕",
        },
        {
          name: "Get a Hangul Certificate",
          url: "https://jasurlive.github.io/Hangul/",
          icon: "📄",
          description: "Get a Hangul Certificate",
        },
        {
          name: "Latin-Cyrillic Converter (uzConvert)",
          url: "https://uzconvert.vercel.app",
          icon: "🔁",
          description: "Latin-Cyrillic Converter",
        },
        {
          name: "To-Do List (ChecklistGo)",
          url: "https://checklistgo.vercel.app",
          icon: "✅",
          description: "To-Do List",
        },
        {
          name: "Make Framed Pictures",
          url: "https://jasurlive.github.io/photo-frame/",
          icon: "🖼️",
          description: "Make Framed Pictures",
        },
      ],
    };
  },
};
</script>

<style scoped>
:root {
  --bg-gradient-top: rgba(234, 234, 234, 0.7);
  --bg-gradient-bottom: rgba(255, 255, 255, 0.7);
  --text-color: #1c4777;
  --hover-bg-start: #598dc7;
  --hover-bg-end: #7fb0e1;
  --hover-text: #ffffff;
}

.theme-dark {
  --bg-gradient-top: rgba(120, 120, 120, 0.8);
  --bg-gradient-bottom: rgba(170, 170, 170, 0.8);
  --text-color: #e0e0e0;
  --hover-bg-start: #4a4a4a;
  --hover-bg-end: #5c5c5c;
  --hover-text: #ffffff;
}

.container-web-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
}
.web-project-link {
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    transform 0.3s ease;
  background: linear-gradient(
      to top,
      var(--bg-gradient-top),
      var(--bg-gradient-bottom)
    ),
    linear-gradient(
      to bottom,
      var(--bg-gradient-top),
      var(--bg-gradient-bottom)
    );
  color: var(--text-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin: 0.2rem;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  border: 1px solid #96969666;
}

.web-project-link:hover {
  background: linear-gradient(
    to right,
    var(--hover-bg-start),
    var(--hover-bg-end)
  );
  color: var(--hover-text);
  transform: scale(1.01);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.profile-pic img {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .container-web-projects {
    flex-direction: column;
    align-items: center;
  }

  .web-project-link {
    width: 20rem;
    justify-content: center;
    font-size: 1rem;
    padding: 1rem;
  }

  .profile-pic img {
    width: 10rem;
    border-radius: 50%;
    object-fit: contain;
    margin: 1rem auto;
  }
}

@media screen and (min-width: 601px) {
  .container-web-projects {
    padding: 0 15rem;
  }

  .web-project-link {
    flex: 1 1 calc(50% - 1rem);
    font-size: 1.2rem;
    padding: 1.5rem 2rem;
  }

  .profile-pic img {
    width: 10rem;
    border-radius: 50%;
    object-fit: contain;
    margin: 1rem auto;
  }
}
</style>
