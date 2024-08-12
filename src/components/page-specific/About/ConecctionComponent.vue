<script setup>
// Imports
// Import `ref` and `reactive` from Vue for creating reactive data
import { ref, reactive } from "vue";
// Import the `getUsers` function to fetch user data from the API
import { getUsers } from "@/services/apisAbout/apiUsers";

// Create a reactive `users` object to store user data fetched from the API
const users = reactive(getUsers());

// Define a reactive variable to keep track of the icon state (for the button)
//const activeIcon = ref("fa-solid fa-user-plus");

// Function to toggle the icon between "user-plus" and "user-check" states
const toggleIcon = (index) => {
  users[index].icon =
    users[index].icon === "fa-solid fa-user-check"
      ? "fa-solid fa-user-plus"
      : "fa-solid fa-user-check";
};
</script>

<template>
  <!-- Container for the connections section -->
  <div class="conecction">
    <!-- Title for the connections section -->
    <h3>Connections</h3>
    <!-- Iterate over each user and display their information -->
    <div class="connection-item" v-for="(user, index) in users" key="index">
      <!-- Display user avatar -->
      <img :src="user.avatar" :alt="user.name" class="avatar" />

      <div>
        <!-- Display user name and connection details -->
        <p class="name">{{ user.name }}</p>
        <p class="conecctions">{{ user.connections }}</p>
      </div>
      <!-- Button to toggle the icon state for each user -->
      <button
        @click="toggleIcon(index)"
        :class="['btn-icon', { active: user.icon === 'fa-solid fa-user-check' }]"
      >
        <!-- Display the current icon based on user state -->
        <i :class="user.icon"></i>
      </button>
    </div>
    <!-- Link to view all connections -->
    <a href="#" class="view">View all connections</a>
  </div>
</template>

<style lang="scss" scoped>
.conecction {
  width: 450px;
  height: 440px;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 16px;
    color: #797878;
    margin-bottom: 1.5rem;
  }

  .connection-item {
    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    .name {
      align-items: center;
      margin-bottom: -4px;
      color: #5c5c5c;
      font-weight: bold;
    }

    .conecctions {
      color: #999;
    }

    .btn-icon {
      width: 35px;
      height: 35px;
      margin-left: auto;
      background-color: #c8c4eb;
      color: #fff;
      border: none;
      border-radius: 4px;

      i {
        color: #7367ef;
        font-size: 14px;
      }

      &.active {
        background-color: #7367ef;

        i {
          color: white;
        }
      }

      &:hover {
        transition: ease 0.5s;
        background-color: #7367ef;

        i {
          color: white;
        }
      }
    }
  }
}

.view {
  margin-top: 2rem;
  font-weight: bold;
  display: block;
  text-align: center;
  color: #7367ef;
  text-decoration: none;
}
</style>
