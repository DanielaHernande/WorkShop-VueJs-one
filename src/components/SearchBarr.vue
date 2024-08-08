<script setup>

// Importaciones
// Import del ref
import { ref } from 'vue';

// Definir la prpiedad 
const search = ref('');

// Definir los eventos de emit
const emit = defineEmits(['emitSearch']);

// Metodos
// Metodo para manjear el metodo de busqueda
const onSearch = () => {
    emit('emitSearch', search.value);
};

</script>

<template>
    <div class="search-bar mt-2">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" placeholder="Search" v-model="search" @input="onSearch"> 
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
    left: 7rem; // Ajusta la posición del ícono
    font-size: 1rem;
    color: #aaa;
    pointer-events: none; // Asegura que el ícono no interfiera con el input
  }
}
</style>