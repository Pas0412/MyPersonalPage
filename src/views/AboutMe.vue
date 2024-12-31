<template>
  <div>
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
