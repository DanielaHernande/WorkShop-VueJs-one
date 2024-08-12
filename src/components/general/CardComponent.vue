<script setup>
// Importa la función `ref` de Vue para crear referencias reactivas
import { ref } from "vue";

// Image of backgroun se guarda la ruta en una referencia reactiva
const fondoImg = ref("public/img/fondo.jpg");
// Avatra se guarda la ruta en una referencia reactiva
const avatar = ref("public/img/avatar.jpg");

// Name se guarda la ruta en una referencia reactiva
const name = ref("Jhon Doe");
// Role se guarda la ruta en una referencia reactiva
const role = ref("Coder");
// Location se guarda la ruta en una referencia reactiva
const location = ref("Medellin");
// joinedDate se guarda la ruta en una referencia reactiva
const joinedDate = ref("Joined April 2021");
</script>

<template>
  <!-- Tarjeta de perfil con margen superior -->
  <div class="profile-card mt-4">
    <!-- Sección del encabezado del perfil que incluye la imagen de fondo -->
    <div class="profile-header">
      <img class="fondo-img" :src="fondoImg" alt="fondo" />
    </div>

    <!-- Sección con detalles del perfil -->
    <div class="profile-detall">
      <!-- Imagen del avatar del usuario -->
      <img class="avatar" :src="avatar" alt="avatra" />
      <!-- Información del usuario, incluyendo nombre, rol, ubicación y fecha de unión -->
      <div class="info ">
        <!-- Muestra el nombre del usuario -->
        <h2>{{ name }}</h2>
        <!-- Detalles adicionales como rol, ubicación y fecha de unión -->
        <div class="detalles">
          <span class="role">
            <!-- Icono y rol del usuario -->
            <i class="fa-solid fa-palette"></i> {{ role }}</span
          >
          <span class="location">
            <!-- Icono y ubicación del usuario -->
            <i class="fa-solid fa-location-dot"></i> {{ location }}</span
          >
          <span class="joinedDate">
            <!-- Icono y fecha de unión del usuario -->
            <i class="fa-solid fa-calendar-days"></i> {{ joinedDate }}</span
          >
        </div>
      </div>

      <!-- Btn de connected -->
      <button class="btn-connect fw-bold">
        <i class="fa-solid fa-user-check"></i> Connected
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style.css";

.profile-card {
  width: 90%;
  //height: 295px;
  margin: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
}

.profile-header {
  position: relative;
}

.fondo-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.profile-detall {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.avatar {
  top: -40px;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  position: relative;
  margin-right: 1rem;
  border: 3px solid #fff;
}

.info {
  flex-grow: 1;

  h2 {
    color: #616161;
  }
}

.detalles {
  display: flex;
  gap: 1rem;
  color: #979797;

  .role,
  .location,
  .joinedDate {
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .fa-solid {
    color: #979797;
    margin-right: 0.5rem;
  }
}

.btn-connect {
  width: 150px;
  height: 40px;
  background-color: #7367ef;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  .fa-solid {
    margin-right: 0.5rem;
  }

  &:hover {
    transition: ease-out 1s;
    background-color: #4d29ee;
  }
}
</style>
