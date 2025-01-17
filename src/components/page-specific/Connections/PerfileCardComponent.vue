<script setup>
// Imports
import { ref } from "vue";
import { getPerfiles } from "@/services/apiConecction/apiPerfile.js";
import { getColorsConnection } from "@/services/apiConecction/tagColorConnection";

// State: List of profiles
const perfiles = ref(getPerfiles());

// State: Tag color styles
const tagStyles = getColorsConnection();

// Function to get the style for a specific tag
const getTagStyle = (tag) => {
  return tagStyles[tag] || { color: "#333", backgroundColor: "#f0f0f0" };
};

// Function to toggle the icon between 'user-plus' and 'user-check'
const toggleIcon = (index) => {
  perfiles.value[index].icon =
    perfiles.value[index].icon === "fa-solid fa-user-plus"
      ? "fa-solid fa-user-check"
      : "fa-solid fa-user-plus";
};
</script>

<template>
  <div class="profiles-grid">
    <!-- Iterate through the profiles and display each profile card -->
    <div
      v-for="(perfil, index) in perfiles"
      :key="perfil.name"
      class="profile-card"
    >
      <!-- Profile header with avatar, name, and charge -->
      <div class="profile-header">
        <img :src="perfil.avatar" :alt="perfil.name" class="profile-avatar" />
        <h2 class="perfile-name">{{ perfil.name }}</h2>
        <p class="profile-charge">{{ perfil.charge }}</p>
      </div>
      <!-- Profile skills with dynamic tag styles -->
      <div class="profile-skill">
        <span
          v-for="skill in perfil.skills"
          :key="skill"
          :style="getTagStyle(skill)"
          class="skill fw-bold"
          >{{ skill }}</span
        >
      </div>
      <!-- Profile statistics including projects, tasks, and connections -->
      <div class="profile-statistics">
        <div class="statistic">
          <span class="statistic-value">{{ perfil.statistics.projects }}</span>
          <span class="statistic-label">Projects</span>
        </div>
        <div class="statistic">
          <span class="statistic-value">{{ perfil.statistics.tasks }}</span>
          <span class="statistic-label">Tasks</span>
        </div>
        <div class="statistic">
          <span class="statistic-value">{{
            perfil.statistics.connections
          }}</span>
          <span class="statistic-label">Connections</span>
        </div>
      </div>
      
      <!-- Profile actions with toggle and message buttons -->
      <div class="profile-actions">
        <button
          @click="toggleIcon(index)"
          :class="[
            'btn-conexion ms-4 fw-bold',
            { active: perfil.icon === 'fa-solid fa-user-check' },
          ]"
        >
          <i :class="['me-2', perfil.icon]"></i>Connected
        </button>
        <button class="btn-message">
          <i class="fa-regular fa-envelope"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profiles-grid {
  width: 90%;
  margin-left: 80px;
  background-color: #fff;
  gap: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

.profile-card {
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.profile-header {
  position: relative;
}

.profile-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 5px solid #f0f0f0;
}

.perfile-name {
  font-size: 20px;
  color: #5c5c5c;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-charge {
  color: #7e7e7e;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
}

.profile-skill {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;

  .skill {
    color: #333;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 6px;
    background-color: #f0f0f0;
  }
}

.profile-statistics {
  
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;

  .statistic {
    display: flex;
    align-items: center;
    flex-direction: column;

    .statistic-value {
      color: #5c5c5c;
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .statistic-label {
      color: #666;
      font-weight: 500;
      font-size: 12px;
    }
  }
}

.profile-actions {
  display: flex;
  justify-content: space-evenly;

  .btn-conexion {
    gap: 5px;
    border: none;
    display: flex;
    color: #7367ef;
    padding: 8px 15px;
    border-radius: 8px;
    align-items: center;
    background-color: #c8c4eb;

    i {
      color: #7367ef;
      font-size: 14px;
    }

    &.active {
      color: #fff;
      background-color: #7367ef;

      i {
        color: white;
      }
    }

    &:hover {
      color: #fff;
      transition: ease 0.4s;
      background-color: #7367ef;

      i {
        color: white;
      }
    }
  }

  .btn-message {
    width: 50px;
    border: none;
    padding: 8px;
    margin-right: 60px;
    border-radius: 8px;
    background-color: #f0f0f0;

    i {
      color: #333;
      font-size: 20px;
    }

    &:hover {
      background-color: #e0e0e0;
    }
  }
}
</style>
