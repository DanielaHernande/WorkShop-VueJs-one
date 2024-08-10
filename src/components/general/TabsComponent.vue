<script setup>
import { ref, computed } from "vue";

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
  switch (selectTab.value) {
    case "Profile":
      return "ProfileComponent";

    case "Team":
      return "TeamComponent";

    case "Projects":
      return "ProjectsComponent";

    case "Connections":
      return "ConnectionsComponent";

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
      background-color: #6f42c1;
    }

    &:hover {
      color: #fff;
      background-color: #6f42c1;
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