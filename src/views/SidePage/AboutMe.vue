<template>
  <div>
    <div class="card-panel">
      <div class="card-title">
        <img src="../../assets/link.png" alt="link" />关于我
      </div>
    </div>
    <TimeLine />
    <div class="map-title">WHERE I HAVE BEEN</div>
    <TrackInChina />
    <!-- <TrackInWorld /> -->
  </div>
</template>
<script setup>
import TimeLine from "@/components/TimeLine.vue";
import TrackInChina from "@/components/TrackInChina.vue";
// import TrackInWorld from "@/components/TrackInWorld.vue";
</script>
<style scoped>
.card-panel {
  width: 80%;
  margin: 0 auto;
}

.card-title {
  color: white;
  font-size: 24px;
  padding: 0.4rem 0.3rem;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 0.5rem;
}

.card-title img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.map-title {
  color: #add8e6;
  font-size: 36px;
  margin: 5rem 0 2rem 0;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
