<script setup>
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/About/OverviewComponent.vue";
import ConecctionComponent from "./ConecctionComponent.vue";
import TeamsComponent from "./TeamsComponent.vue";
import TableComponent from "./TableComponent.vue";
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
  <div class="project">
    <TableComponent />
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
  gap: 1.6rem;
  top: -49px;
  margin-right: 25px;
  position: relative;
  display: grid;
  justify-items: end;
  grid-template-columns: 2fr 4fr 8fr; 
}

.project {
  top: -20px;
  position: relative;
  margin-bottom: 20px;
  display: grid;
  margin-right: 25px;
  justify-content: end;
}
</style>