<script setup>
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/About/OverviewComponent.vue";
import ConecctionComponent from "./ConecctionComponent.vue";
import TeamsComponent from "./TeamsComponent.vue";
</script>

<template>
  <div class="dashboard">
    <div class="top-section">
      <AboutComponent />
      <ActivityTimeline />
    </div>
    <div class="bottom-section">
      <OverviewComponent />
      <ConecctionComponent />
      <TeamsComponent />
    </div>
  </div>
</template>



<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr; 
}

.top-section {
  display: grid;
  grid-template-columns: 2fr 4fr; 
  margin-bottom: 10px;
}

.bottom-section {
  gap: 1.7rem;
  top: -49px;
  margin-right: 20px;
  position: relative;
  display: grid;
  justify-items: end;
  grid-template-columns: 2fr 4fr 8fr; 
}
</style>