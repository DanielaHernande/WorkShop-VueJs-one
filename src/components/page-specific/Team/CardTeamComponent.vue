<script setup>
import { ref } from "vue";
import { getApiTeams } from "@/services/apiTeams/apiTeams";

const activeIcon = ref('fa-regular fa-star')
const teams = getApiTeams();

const toggleIcon = (index) => {

    teams[index].star = 
        teams[index].star === 'fa-regular fa-star'
        ? 'fa-solid fa-star'
        : 'fa-regular fa-star';
};
</script>

<template>
  <div class="contenedor">
    <div class="teams-gri">
      <div v-for="team in teams" :key="team.id" class="team-card">
        <div class="card-header">
          <img :src="team.icon" :alt="team.name" class="team-icon" />
          <h3 class="team-name">{{ team.name }}</h3>
          <button @click="toggleIcon(index)" :class="['btn-start',{ active: activeIcon === team.star }]"><i :class="team.star"></i></button>

        </div>
        <p class="team-description">{{ team.description }}</p>
        <div class="team-tags">
          <span v-for="tag in team.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
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

    width: 95%;
    padding: 10px;
    margin-left: 40px;
    background-color: red;

  .teams-gri {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .team-card {
    height: 230px;
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
      font-size: 18px;
      font-weight: bold;
    }

    i {
      top: -4px;
      position: relative;
      margin-left: 40px;

      &:hover {
        color: yellow;
      }

      &.active {
        color: yellow;
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
      background-color: #f0f0f0;
      color: #333;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }

  .team-members {
    display: flex;
    align-items: center;

    .member-avatar {
      top: -50px;
      position: relative;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>
