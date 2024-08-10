<script setup>
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/About/OverviewComponent.vue";
import ConecctionComponent from "./ConecctionComponent.vue";
</script>

<template>

    <div class="dashboard">
        <AboutComponent />
        <ActivityTimeline />
    </div>

    <OverviewComponent />
    <ConecctionComponent />
</template>

<style lang="scss" scoped>

.dashboard {
  display: grid;
  grid-template-columns: 1fr 2fr; 

}
</style>