<template>
  <section class="main-structure">
    <header>
      <a href="#">
        <div class="logo">Personal Page</div>
      </a>
      <div class="menu">
        <img src="./assets/logo.png" alt="">
        <div class="menu-logo"></div>
      </div>
    </header>
    <div class="content">
      <video class="active" src="./assets/video/island.mp4" autoplay muted loop></video>
      <div class="video-overlay"></div>
      <section class="text-description">
        <h1>Yonghui HUANG</h1>
        <h2>Software Developer</h2>
        <p>Yonghui is currently studying Software Engineering in Université de Technologie de
        Belfort-Montbéliard for his Master degree(Diplôme d'Ingénieur) in Belfort, France.</p>
        <a href="#">More Info</a>
      </section>
    </div>
    <footer>
      <a href="https://github.com/Pas0412"><img src="./assets/github-fill.svg" alt=""></a><a href="https://www.linkedin.com/in/yonghui-huang-b2706a15b/"><img src="./assets/linkedin-box-fill.svg" alt=""></a>
    </footer>
  </section>
  <section class="aside-menu"></section>
</template>

<script>

const ACTIVE = "active";

export default {
  name: "MyPersonalPage",
  mounted() {
    const menu_logo = document.querySelector("header .menu .menu-logo");
    menu_logo.addEventListener('click', ()=> {
      menu_logo.classList.toggle(ACTIVE);//if you have => cancel, if not => add
    })
  }
}

</script>

<style>

:root {
  --main-desktop-font-size: 30px;
  --main-pad-font-size: calc(var(--main-desktop-font-size) * 4.8 / 6);
  --header-toggle-width: 30px;
  --header-pad-toggle-width: calc(var(--header-toggle-width) * 5 / 6);
  --main-background-color: #fff;
  --main-text-color: #fff;
  --screen-desktop-padding-top-bottom: 50px;
  --screen-desktop-padding-left-right: 100px;
  --screen-pad-padding-top-bottom: 10px;
  --screen-pad-padding-left-right: 30px;
  --footer-margin-right: 10px;
  --footer-icon-width: 30px;
  --footer-pad-icon-width: calc(var(--footer-icon-width) * 5 / 6);
  --text-description-h1-size: 3em;
  --text-description-h1-pad-size: 2.5em;
  --text-description-h2-size: 2em;
  --text-description-h2-pad-size: 1.5em;
  --text-description-p-size: 1rem;
  --text-description-p-pad-size: 1rem;
}

* {
  box-sizing: border-box;
  -webkit-user-drag: none;

}

html, body {
  all: unset;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Finlandica', sans-serif;
  background-color: var(--main-background-color);
  color: var(--main-text-color);
}

.main-structure,
.main-structure header,
.main-structure .content,
.main-structure footer {
  width: 100%;
  user-select: none;
}

.main-structure,
.aside-menu {
  font-size: var(--main-desktop-font-size);
}

.main-structure {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-content: center;
}

.main-structure header,
.main-structure footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.main-structure header .menu {
  display: flex;
  flex-direction: row;
}

.main-structure header .menu img {
  width: var(--header-toggle-width);
}

.main-structure header .menu .menu-logo {
  background: url("/src/assets/menu.svg") no-repeat center;
  width: var(--header-toggle-width);
  height: var(--header-toggle-width);
  background-size: var(--header-toggle-width);
  filter: invert(1);
  margin-left: 10px;
}

.main-structure header .menu .menu-logo:hover {
  border: 2px solid black;
  border-radius: 4px;
  animation: menu_logo ease-in 1s infinite;
}

.main-structure header .menu .menu-logo.active {
  background: url("/src/assets/close.svg") no-repeat center;
  width: var(--header-toggle-width);
  height: var(--header-toggle-width);
  background-size: var(--header-toggle-width);
}

.main-structure header a {
  display: inline-block;
  text-decoration: none;
  color: var(--main-text-color);
  transition: 0.2s;
}

.main-structure header a:hover {
  transform: scale(1.2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.main-structure header,
.main-structure .content,
.main-structure footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: var(--screen-desktop-padding-top-bottom) var(--screen-desktop-padding-left-right);
  transition: 0.5s;
}

.main-structure footer {
  justify-content: flex-start;
}

.main-structure footer a:not(:last-child) {
  margin-right: var(--footer-margin-right);
}

.main-structure footer a img {
  width: var(--footer-icon-width);
  filter: invert(1);
  transition: 0.5s;
}

.main-structure footer a img:hover {
  transform: translateY(-5px);
}

.main-structure .content video,
.main-structure .content .video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.main-structure .content video {
  object-fit: cover;
  padding: 0;
  margin: 0;
  clip-path: ellipse(0% 0% at 0% 50%);
}

.main-structure .content video.active {
  clip-path: ellipse(150% 70% at 0% 50%);
}

.content .text-description h1,
.content .text-description h2,
.content .text-description p {
  margin: 0;
  padding: 0;
}

.content .text-description h1,
.content .text-description h2 {
  text-transform: uppercase;
}

.content .text-description h1 {
  font-size: var(--text-description-h1-size);
  line-height: 1em;
}

.content .text-description h2 {
  font-size: var(--text-description-h2-size);
  line-height: 1em;

}

.content .text-description p {
  font-size: var(--text-description-p-size);
  line-height: 1.5em;
  max-width: 700px;
  min-width: 400px;
  margin: 3em 0;
}

.content .text-description a {
  display: inline-block;
  text-decoration: none;
  border: 2px solid var(--main-background-color);
  color: var(--main-text-color);
  line-height: 1em;
  text-transform: uppercase;
  padding: 10px 30px;
  letter-spacing: 2px;
  border-radius: 30px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1), -1px -1px 8px rgba(255, 255, 255, 0.1) ;
  transition: 0.3s;
}

@media (max-width: 1200px) {

  .main-structure {
    font-size: var(--main-pad-font-size);
  }
  .main-structure header,
  .main-structure .content,
  .main-structure footer {
    padding: var(--screen-pad-padding-top-bottom) var(--screen-pad-padding-left-right);
  }

  .main-structure header .menu-logo {
    width: var(--header-toggle-width);
    height: var(--header-toggle-width);
    background-size: var(--header-pad-toggle-width);
  }

  .main-structure footer a img {
    width: var(--footer-pad-icon-width);
  }

  .content .text-description h1 {
    font-size: var(--text-description-h1-pad-size);
    line-height: 1em;
  }

  .content .text-description h2 {
    font-size: var(--text-description-h2-pad-size);
    line-height: 1em;

  }

  .content .text-description p {
    font-size: var(--text-description-p-pad-size);
    line-height: 1.5em;
    max-width: 500px;
    min-width: 300px;
  }
}

@keyframes menu_logo {
  from, to{
    filter: invert(1);
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>
