<script setup>
import SearchBarr from "@/components/general/SearchBarr.vue";
import PerfileComponent from "@/components/general/PerfileComponent.vue";
import TabsComponent from "@/components/general/TabsComponent.vue";
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";

</script>

<template>
  <SearchBarr />
  <PerfileComponent />
  <TabsComponent />

  <div class="dashboard">
    <AboutComponent />
    <ActivityTimeline />
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 2fr; 

}
</style>