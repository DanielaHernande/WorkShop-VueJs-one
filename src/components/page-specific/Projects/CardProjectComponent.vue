<script setup>
import { ref } from "vue";
import { getProjects } from "@/services/apiProjects/apiProjects.js";

const infoProjects = ref(getProjects());
</script>

<template>
  <div class="project-grid">
    <div v-for="project in infoProjects" :key="project.id" class="project-card">
      <div class="project-header">
        <img :src="project.icon" :alt="project.name" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="client-name">Client: {{ project.client }}</p>
        </div>
        <div class="more-options">⋮</div>
      </div>

      <div class="details-date">
        <div class="budget">
          <p class="fw-bold">{{ project.budget }}</p>
          <p class="total-budget">Total Budget</p>
        </div>

        <div class="dates">
          <p><strong>Start Date:</strong> {{ project.startDate }}</p>
          <p><strong>Deadline: </strong>{{ project.deadline }}</p>
        </div>
      </div>

      <p class="description">{{ project.description }}</p>

      <div class="info-hours">
        <p class="par">
          <strong>All Hours:</strong> {{ project.hoursLogged }} /
          {{ project.hoursTotal }}
        </p>
        <div class="days-left">{{ project.daysLeft }} Days left</div>
      </div>

      <div class="progress-bar">
        <span class="progress-text">{{ project.progress }}% Completed</span>
        <div class="progress" :style="{ width: project.progress + '%' }"></div>
      </div>

      <div class="footer">
        <div class="avatars">
          <img
            v-for="(avatar, index) in project.avatars"
            :key="index"
            :src="avatar"
            alt="Avatar 1"
            class="avatar"
          />
        </div>
        <p class="member">{{ project.members }} Members</p>
        <div class="comments">
          <i class="fa-regular fa-message me-1"></i>{{ project.comments }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-grid {
  gap: 1rem;
  width: 95%;
  margin-left: 48px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));

  .project-card {
    padding: 1.6rem;
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .project-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 20px;
    }

    .project-info {
      flex: 1;
      margin-left: 10px;

      h3 {
        margin: 0;
        font-size: 1.2em;
      }

      .client-name {
        margin: 0;
        font-size: 0.9em;
        color: #888;
      }
    }

    .more-options {
      font-size: 1em;
      cursor: pointer;
    }
  }

  .details-date {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .budget {
    background: #f3f3f3;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;

    p {
      margin: 0;
      color: #4b4b4b;
      font-size: 0.9em;
    }

    .total-budget {
      font-size: 0.8em;
      color: #888;
    }
  }

  .dates {
    padding: 10px;
    margin-bottom: 10px;

    p {
      margin: 4px 0;
      color: #556;
      font-size: 0.9em;
    }
  }

  .total-budget {
    color: #888;
    font-size: 0.8rem;
  }

  .description {
    color: #555;
    font-size: 0.9em;
    margin-bottom: 20px;
  }

  .info-hours {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .par {
      margin: 4px 0;
      color: #556;
      font-size: 0.9em;
    }

    .days-left {
      background: #e8f7e9;
      color: #34c38f;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.8em;
    }
  }

  .progress-bar {
    height: 8px;
    margin-top: 6px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
    background: #f0f0f0;
  }

  .progress {
    height: 100%;
    border-radius: 5px;
    background: #34c38f;
  }

  .progress-text {
    top: -4px;
    right: 10px;
    font-size: 0.6em;
    color: #383838;
    position: absolute;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .avatars {
      display: flex;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: -10px;
        border: 2px solid #fff;
      }
    }
  }

  .member {
    color: #888;
    margin-top: 11px;
    margin-right: 100px;
    font-size: 0.8em;
  }

  .comments {
    font-size: 1em;
    color: #888;
    cursor: pointer;
  }
}
</style>
