<script setup>
// Import components to be used in this template
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/About/OverviewComponent.vue";
import ConecctionComponent from "./ConecctionComponent.vue";
import TeamsComponent from "./TeamsComponent.vue";
import TableComponent from "./TableComponent.vue";
</script>

<template>
  <!-- Main dashboard container -->
  <div class="dashboard">
    <!-- Top section of the dashboard -->
    <div class="top-section">
      <!-- Component displaying about information -->
      <AboutComponent />
      <!-- Component showing activity timeline -->
      <ActivityTimeline />
    </div>
    <!-- Bottom section of the dashboard -->
    <div class="bottom-section">
      <!-- Component providing an overview -->
      <OverviewComponent />
      <!-- Component for displaying teams -->
      <ConecctionComponent />
      <TeamsComponent />
    </div>
  </div>
  <!-- Project section -->
  <div class="project">
    <!-- Component for displaying a table -->
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
  gap: 1rem;
  top: -49px;
  margin-right: 110px;
  position: relative;
  display: grid;
  justify-items: end;
  grid-template-columns: 3fr 8fr 7fr;
}

.project {
  top: -20px;
  position: relative;
  margin-bottom: 20px;
  display: grid;
  margin-right: 90px;
  justify-content: end;
}
</style>
