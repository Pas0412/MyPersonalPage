<template>
    <section class="main-structure">
      <header>
        <a href="#">
          <div class="logo">Personal Page</div>
        </a>
        <div class="menu">
          <img src="../assets/logo.png" alt="">
          <span>click here -></span>
          <div class="menu-logo"></div>
        </div>
      </header>
      <div class="content">
        <video class="active" src="../assets/video/island.mp4" autoplay muted loop></video>
        <div class="video-overlay"></div>
        <section class="text-description">
          <h1>Yonghui HUANG</h1>
          <h2>Software Developer</h2>
          <p>Yonghui is currently studying Software Engineering in Université de Technologie de
          Belfort-Montbéliard for his Master degree(Diplôme d'Ingénieur) in Belfort, France.</p>
          <a href="#">CONTACT</a>
        </section>
      </div>
      <footer>
        <a href="https://github.com/Pas0412"><img src="../assets/github-fill.svg" alt=""></a><a href="https://www.linkedin.com/in/yonghui-huang-b2706a15b/"><img src="../assets/linkedin-box-fill.svg" alt=""></a>
      </footer>
    </section>
    <section class="aside-menu">
      <img src="../assets/yonghui.jpg" alt="">
      <a href="https://pas0412.github.io/MyPersonalPage/static/resume.pdf" download="简历-黄永辉.pdf"><span>RESUME</span></a>
      <router-link to="/matrix" class="matrix"><span>MATRIX</span></router-link>
    </section>
  </template>
  
  <script>
  
  const ACTIVE = "active";
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "home",
    mounted() {
      const main_structure = document.querySelector(".main-structure");
      const menu_logo = document.querySelector("header .menu .menu-logo");
      menu_logo.addEventListener('click', ()=> {
        menu_logo.classList.toggle(ACTIVE);//if you have => cancel, if not => add
        main_structure.classList.toggle(ACTIVE);
      })
      const contact = document.querySelector(".content .text-description a");
      contact.addEventListener('mouseenter', ()=> {
          contact.textContent = "Email: huangyh__123@163.com";
        })
      contact.addEventListener('mouseleave', ()=> {
        contact.textContent = "CONTACT";
      })
      contact.addEventListener('click', ()=> {
        contact.textContent = "Email: huangyh__123@163.com";
      })
    }
  }
  
  </script>
  
  <style>
  /* @import url('https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@1,500&display=swap'); */


  :root {
    --main-desktop-font-size: 30px;
    --main-pad-font-size: calc(var(--main-desktop-font-size) * 4.8 / 6);
    --header-toggle-width: 50px;
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
    --menu-width: 10em;
    --main-structure-left: 2em;
    --menu-margin-bottom: 1em;
    --main-color: lightblue;
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
    background-image: url("../assets/back.jpg");
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
    all: unset;
    width: 100vw;
    min-height: 100vh;
    font-size: var(--main-desktop-font-size);
    line-height: 1em;
  }
  
  .main-structure {
    position: relative;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    align-content: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    transform: perspective(5000px) translateX(0px) translateY(0) translateZ(0) rotateX(0deg) rotateY(0) rotateZ(0deg);
    transition: 1s;
  }
  
  .main-structure.active {
    width: calc(100% - var(--menu-width) - var(--main-structure-left));
    height: calc(100vh - 2* var(--main-structure-left));
    top: var(--main-structure-left);
    right: var(--menu-width);
    left: var(--main-structure-left);
    bottom: var(--main-structure-left);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transform: perspective(5000px) translateX(0px) translateY(0) translateZ(0) rotateX(0deg) rotateY(35deg) rotateZ(0deg);
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
    align-items: center;
  }
  
  .main-structure header .menu img {
    width: var(--header-toggle-width);
  }
  
  .main-structure header .menu .menu-logo {
    background: url("/src/assets/copy.svg") no-repeat center;
    width: var(--header-toggle-width);
    height: var(--header-toggle-width);
    background-size: var(--header-toggle-width);
    /* filter: invert(1); */
    margin-left: 10px;
  }
  
  .main-structure header .menu .menu-logo:hover {
    border: 2px solid lightblue;
    border-radius: 4px;
    animation: menu_logo ease-in 1s infinite;
  }
  
  .main-structure header .menu .menu-logo.active {
    background: url("/src/assets/close.svg") no-repeat center;
    filter: invert(1);
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
  
  .aside-menu a,
  .content .text-description a,
  .matrix {
    display: inline-block;
    text-decoration: none;
    border: 2px solid var(--main-background-color);
    color: var(--main-text-color);
    line-height: 1em;
    padding: 10px 30px;
    letter-spacing: 2px;
    border-radius: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1), -1px -1px 8px rgba(255, 255, 255, 0.1) ;
    transition: 0.3s;
  }
  
  .aside-menu a:hover,
  .content .text-description a:hover,
  .matrix:hover {
    color: var(--main-text-color);
    background-color: var(--main-color);
    letter-spacing: 5px;
  }
  
  .aside-menu {
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    width: var(--menu-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .aside-menu a,
  .matrix {
    border-color: var(--main-color);
    color: var(--main-color);
    min-width: calc(var(--menu-width) * 2 / 3);
    text-align: center;
  }
  
  .aside-menu img {
    border-radius: 50%;
    width: 6em;
    height: 7em;
    margin-bottom: 2em;
    opacity: 0;
    filter: drop-shadow(grey 0px 0px 8px);
    animation: slideLeft 1s ease forwards, changeImg 4s ease-in-out infinite;
    animation-delay: 2s, 3s;
  }
  
  .aside-menu a:not(:last-child) {
    margin-bottom: var(--menu-margin-bottom);
  }
  
  @media (max-width: 1200px) {
    .aside-menu,
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
      /* filter: invert(1); */
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  
  @keyframes slideLeft {
    0% {
      transform: scale(0);
    }
  
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes changeImg {
    0% {
      transform: translateY(0px);
    }
    
    50% {
      transform: translateY(20px);
    }
  
    100% {
      transform: translateY(0px);
    }
  }
  </style>
  