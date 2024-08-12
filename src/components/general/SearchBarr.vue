<script setup>
// Importaciones
// Importa la función `ref` de Vue para crear una referencia reactiva
import { ref } from "vue";

// Definir la propiedad `search` como una referencia reactiva para almacenar el valor del campo de búsqueda
const search = ref("");

// Definir los eventos de `emit`
// `defineEmits` permite declarar eventos personalizados que el componente puede emitir
const emit = defineEmits(["emitSearch"]);

// Métodos
// Método para manejar el evento de búsqueda
// Este método se ejecuta cada vez que se actualiza el campo de búsqueda
const onSearch = () => {
  emit("emitSearch", search.value);
};
</script>

<template>
  <!-- Barra de búsqueda con un margen superior -->
  <div class="search-bar mt-3">
    <!-- Icono de lupa para la barra de búsqueda -->
    <i class="fa-solid fa-magnifying-glass search-icon"></i>
    <!-- Campo de entrada de texto para realizar la búsqueda -->
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      @input="onSearch"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 85%;
    padding: 0.5rem 2rem 0.5rem 2.5rem; // Espacio para el ícono
    border: 1px solid rgba(192, 188, 188, 0.815);
    border-radius: 0.5rem;

    &:focus {
      outline: none;
      box-shadow: 0 1px 4px rgba(114, 60, 241, 0.664);
    }
  }

  .search-icon {
    position: absolute;
    left: 7rem;
    font-size: 1rem;
    color: #aaa;
    pointer-events: none;
  }
}
</style>