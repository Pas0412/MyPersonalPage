<template>
    <div class="matrix-container">
        <canvas ref="canvasRef"></canvas>
    </div>
</template>
<script>
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "matrix",
  setup() {
    const canvasRef = ref(null);

    onMounted(() => {
    //   const canvas = canvasRef.value;

      const cvs = document.querySelector('canvas');
      const ctx = cvs.getContext("2d");

      cvs.width = window.innerWidth * devicePixelRatio;
      cvs.height = window.innerHeight * devicePixelRatio;
      
      const fontSize = 10 * devicePixelRatio;

      // 绘制图形
    //   ctx.fillStyle = '#fff';
      ctx.font = `normal ${fontSize}px Roboto Mono`;
      const columnCount = Math.floor(cvs.width / fontSize);
      const charIndex = new Array(columnCount).fill(0);

      function getRandomChar() {
        const str = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*/`¥';
        return str[Math.floor(Math.random() * str.length)];
      }
      function draw(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = '#6BE445';
        ctx.textBaseline = 'top';
        for(let i = 0; i < columnCount; i++){
            const text = getRandomChar();
            const x = i * fontSize;
            const y = charIndex[i] * fontSize;
            ctx.fillText(text, x, y);
            if(y > cvs.height && Math.random() > 0.99){
                charIndex[i] = 0;
            }
            else{
                charIndex[i]++;
            }
        }
        
      }

      setInterval(draw, 20);
    });

    return { canvasRef };
  },
};

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

.matrix-container {
    background-color: #000;
    height: 100vh;
    width: 100vw;
}
</style>