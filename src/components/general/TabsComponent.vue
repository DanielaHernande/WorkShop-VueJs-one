<script setup>
// Importaciones
// Importa funciones de Vue y componentes específicos para cada pestaña
import { ref, computed } from "vue";
import PerfileComponent from "@/components/page-specific/About/PerfileComponent.vue";
import CardTeamComponent from "@/components/page-specific/Team/CardTeamComponent.vue";
import PerfileCardComponent from "@/components/page-specific/Connections/PerfileCardComponent.vue";
import CardProjectComponent from "@/components/page-specific/Projects/CardProjectComponent.vue";

// Definir las pestañas disponibles
// `tabs` es una referencia reactiva que contiene un array de objetos con la información de cada pestaña
const tabs = ref([
  { name: "Profile", label: "Profile", icon: "fas fa-user" },
  { name: "Team", label: "Team", icon: "fas fa-users" },
  { name: "Projects", label: "Projects", icon: "fas fa-th-large" },
  { name: "Connections", label: "Connections", icon: "fas fa-link" },
]);

// Pestaña activa por defecto, inicializada como "Profile"
const activeTab = ref("Profile");

// Función para seleccionar una pestaña
// Cambia la pestaña activa cuando se hace clic en una de las pestañas
const selectTab = (tabName) => {
  activeTab.value = tabName;
};

// Computed para determinar el componente a renderizar según la pestaña activa
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
  <!-- Contenedor de pestañas -->
  <div class="tabs">
    <!-- Botones para cada pestaña, se iteran a través del array `tabs` -->
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="['tab-boton fw-bold', { active: activeTab === tab.name }]"
      @click="selectTab(tab.name)"
    >
      <!-- Icono y etiqueta de la pestaña -->
      <i :class="tab.icon"></i>
      {{ tab.label }}
    </button>
  </div>

  <!-- Contenido de la pestaña seleccionada -->
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
      background-color: #7367ef;
    }

    &:hover {
      color: #fff;
      background-color: #7367ef;
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
