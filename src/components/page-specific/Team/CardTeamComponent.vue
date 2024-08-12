<script setup>
// Imports
import { ref } from "vue";
import { getApiTeams } from "@/services/apiTeams/apiTeams";
import { tagsColor } from "@/services/apiTeams/tagsColor";

// State: List of teams
//const activeIcon = ref('fa-regular fa-star')
const teams = ref(getApiTeams());

// State: Tag color styles
// Para traer los colores
const tagStyles = tagsColor();

// Function to get the style for a specific tag
// Por si el color de la etyiqueta no esta se pondra n color por defecto
const getTagStyle = (tag) => {
  return tagStyles[tag] || { color: "#333", backgroundColor: "#f0f0f0" };
};

// Function to toggle the star icon for a team
const toggleIcon = (index) => {
  teams.value[index].star =
    teams.value[index].star === "fa-regular fa-star"
      ? "fa-solid fa-star"
      : "fa-regular fa-star";
};
</script>

<template>
  <div class="contenedor">
    <!-- Container for the team cards -->
    <div class="teams-gri">
      <!-- Iterate through the teams and display each team card -->
      <div v-for="(team, index) in teams" :key="team.id" class="team-card">
        <div class="card-header">
          <!-- Team icon and name -->
          <img :src="team.icon" :alt="team.name" class="team-icon" />
          <h3 class="team-name">{{ team.name }}</h3>

          <!-- Button to toggle the star icon -->
          <button
            @click="toggleIcon(index)"
            :class="['btn-start', { active: team.star === 'fa-solid fa-star' }]"
          >
            <i :class="team.star"></i>
          </button>
        </div>

        <!-- Team description -->
        <p class="team-description">{{ team.description }}</p>

        <!-- Tags associated with the team -->
        <div class="team-tags">
          <span
            v-for="tag in team.tags"
            :key="tag"
            :style="getTagStyle(tag)"
            class="tag fw-bold"
            >{{ tag }}</span
          >
        </div>

        <!-- Team members -->
        <div class="team-members">
          <img
            v-for="member in team.members"
            :key="member.name"
            :src="member.avatar"
            :alt="member.name"
            class="member-avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contenedor {
  width: 90%;
  padding: 10px;
  margin-left: 80px;

  .teams-gri {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .team-card {
    height: 210px;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .team-icon {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }

    .team-name {
      color: #666;
      font-size: 18px;
      font-weight: 550;
    }

    .btn-start {
      width: 10px;
      border: none;
      background: transparent;
      margin-left: 100px;

      i {
        top: -4px;
        font-size: 20px;
        position: relative;
        margin-left: 50px;
        color: #8f8e8e;
      }

      &:hover {
        i {
          color: rgb(255, 223, 82);
        }
      }

      &.active {
        i {
          color: rgb(255, 223, 82);
        }
      }
    }
  }

  .team-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  }

  .team-tags {
    display: flex;
    margin-bottom: 15px;
    justify-content: end;

    .tag {
      top: 10px;
      color: #333;
      font-size: 12px;
      margin-right: 5px;
      padding: 5px 10px;
      border-radius: 4px;
      position: relative;
      margin-bottom: 5px;
      background-color: #f0f0f0;
    }
  }

  .team-members {
    display: flex;
    align-items: center;

    .member-avatar {
      top: -40px;
      position: relative;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: -10px;
      border: 2px solid #fff;
    }
  }
}
</style>
