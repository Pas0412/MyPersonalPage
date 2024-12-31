<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="contact-us">
        <div class="button">
          <a href="https://github.com/Pas0412"
            ><img src="../assets/github-fill.svg" alt=""
          /></a>
        </div>
        <div class="button">
          <a href="https://www.linkedin.com/in/yonghui-huang-b2706a15b/"
            ><img src="../assets/linkedin-box-fill.svg" alt=""
          /></a>
        </div>
        <div class="button">
          <a
            href="https://pas0412.github.io/MyPersonalPage/static/resume.pdf"
            download="简历-黄永辉.pdf"
          >
            <img src="../assets/resume.png" alt="resume"
          /></a>
        </div>
      </div>
      <div class="legal-info">
        <p>&copy; 2024 Yonghui's Blog Website CopyRight &copy; Yonghui 版权所有</p>
        <p>备案号：ICP备案申请中</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: rgba(128, 128, 128, 0.4);
  color: white;
  padding: 2rem;
  z-index: 2;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.contact-us {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.contact-us,
.legal-info {
  flex: 1;
  justify-content: center;
  text-align: center;
  font-family: "San Francisco";
  font-size: 0.7rem;
}

.footer .footer-content .contact-us .button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
  background-color: rgba(128, 128, 128, 0.4);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.footer .footer-content .contact-us .button a img {
  width: 1.3rem;
  filter: invert(1);
}

.footer .footer-content .contact-us .button:hover {
  transform: translateY(-3px);
}
</style>
