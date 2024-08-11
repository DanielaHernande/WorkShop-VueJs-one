<script setup>
import { ref, computed } from "vue";
import PerfileComponent from "@/components/page-specific/About/PerfileComponent.vue";
import CardTeamComponent from "@/components/page-specific/Team/CardTeamComponent.vue";
import PerfileCardComponent from '@/components/page-specific/Connections/PerfileCardComponent.vue'
import CardProjectComponent from '@/components/page-specific/Projects/CardProjectComponent.vue'

const tabs = ref([
  { name: "Profile", label: "Profile", icon: "fas fa-user" },
  { name: "Team", label: "Team", icon: "fas fa-users" },
  { name: "Projects", label: "Projects", icon: "fas fa-th-large" },
  { name: "Connections", label: "Connections", icon: "fas fa-link" },
]);

const activeTab = ref("Profile");

const selectTab = (tabName) => {
  activeTab.value = tabName;
};

// Para que se active el boton y muetre el contenido del componente seleccionado
const currentTab = computed(() => {
  switch (activeTab.value) {
    case "Profile":
      return PerfileComponent;

    case "Team":
      return CardTeamComponent;

    case "Projects":
      return CardProjectComponent;

    case "Connections":
      return PerfileCardComponent;

    default:
      return null;
  }
});
</script>

<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="['tab-boton fw-bold', { active: activeTab === tab.name }]"
      @click="selectTab(tab.name)"
    >
      <i :class="tab.icon"></i>
      {{ tab.label }}
    </button>
  </div>

  <div class="tab-content">
    <component :is="currentTab"></component>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  gap: 1rem;
  width: 90%;
  padding: 2rem;
  display: flex;
  margin-left: 50px;

  .tab-boton {
    gap: 0.5rem;
    border: none;
    display: flex;
    color: #556;
    font-size: 13px;
    border-radius: 8px;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: transparent;

    &.active {
      color: #fff;
      background-color: #7367EF;
    }

    &:hover {
      color: #fff;
      background-color: #7367EF;
    }

    i {
      width: 1rem;
      height: 1rem;
    }
  }

  .tab-content {
    padding: 1rem;
  }
}
</style>