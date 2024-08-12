<script setup>
// Imports
import { ref, computed, onMounted } from "vue";
import { getProjects } from "@/services/apisAbout/apiPojects";

// States
const projects = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 5;

// Load projects asynchronously when the component is mounted
onMounted(async () => {
  const response = await getProjects();
  projects.value = response;
});

// Computed property to filter projects based on the search query and pagination
const filteredProjects = computed(() => {
  if (!projects.value) return [];

  const filtered = projects.value.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return filtered.slice(startIndex, startIndex + itemsPerPage);
});

// Computed property to determine the total number of pages based on the number of projects
const totalPages = computed(() => {
  if (!projects.value) return 1;
  return Math.ceil(projects.value.length / itemsPerPage);
});

// Function to change the current page
const changePage = (page) => {
  currentPage.value = page;
};

// Function to go to the previous page
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Function to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="project-table">
    <div class="table-header">
      <h3>Project List</h3>
      <!-- Search input to filter projects -->
      <input type="text" v-model="searchQuery" placeholder="Search Project" />
    </div>

    <table>
      <thead>
        <tr class="border-top">
          <th><input type="checkbox" /></th>
          <th>Project</th>
          <th>Leader</th>
          <th>Team</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through filtered projects and display each one in a table row -->
        <tr v-for="project in filteredProjects" :key="project.id">
          <td><input type="checkbox" /></td>
          <td>
            <div class="project-info">
              <!-- Display project icon and name -->
              <img
                :src="project.icon"
                :alt="project.name"
                class="project-icon"
              />
              <div>
                <div class="project-name">{{ project.name }}</div>
                <div class="project-type">{{ project.type }}</div>
              </div>
            </div>
          </td>
          <td>{{ project.leader }}</td>
          <td>
            <div class="team">
              <!-- Loop through team members and display their avatars -->
              <img
                v-for="(member, index) in project.team"
                :key="index"
                :src="member.avatar"
                :alt="member.name"
                class="team-avatar"
              />
              <!-- Display additional team members if there are any -->
              <span v-if="project.extraTeamMembers"
                >+{{ project.extraTeamMembers }}</span
              >
            </div>
          </td>
          <td>
            <div class="progress-bar">
              <!-- Display progress as a percentage width of the progress bar -->
              <div
                class="progress"
                :style="{ width: project.progress + '%' }"
              ></div>
            </div>
            <!-- Display progress percentage -->
            <div class="progress-percentage">{{ project.progress }}%</div>
          </td>
          <td>
            <!-- Button for actions related to the project -->
            <button class="action-button">...</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <!-- Buttons to navigate between pages -->
      <button @click="previousPage">«</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage">»</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-table {
  width: 970px;
  height: 490px;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h3 {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      color: #797878;
    }

    input {
      height: 34px;
      width: 250px;
      border-radius: 4px;
      padding: 0.5rem;
      border: 1px solid #ccc;

      &:placeholder-shown {
        font-size: 12px;
        font-weight: 300;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 1px solid #eee;
    }

    th {
      color: #555;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .project-info {
      display: flex;
      align-items: center;

      .project-icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .project-name {
        font-size: 13px;
        font-weight: 600;
      }

      .project-type {
        color: #777;
        font-size: 12px;
      }
    }

    .team {
      display: flex;
      align-items: center;

      .team-avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-right: -10px;
        border: 2px solid #fff;
      }

      span {
        width: 28px;
        height: 28px;
        color: #555;
        font-weight: 700;
        border-radius: 50%;
        text-align: center;
        border: 2px solid #fff;
        background-color: rgb(207, 207, 209);
      }
    }

    .progress-bar {
      width: 100%;
      height: 6px;
      overflow: hidden;
      border-radius: 10px;
      background-color: #f5f5f5;

      .progress {
        height: 100%;
        background-color: #7367ef;
      }
    }

    .progress-percentage {
      font-weight: 500;
      font-size: 0.875rem;
      margin-top: 5px;
    }

    .action-button {
      border: none;
      color: #555;
      background: none;
      font-size: 1.5rem;
    }
  }

  .pagination {
    gap: 4px;
    display: flex;
    justify-content: end;
    margin-top: 1rem;

    button {
      width: 40px;
      height: 40px;
      font-weight: 700;
      font-size: 1rem;
      color: #7367ef;
      padding: 0.5rem 1rem;
      background-color: rgb(233, 233, 233);
      border: 1px solid rgb(233, 233, 233);
      border-radius: 8px;

      &.active {
        color: #fff;
        background-color: #7367ef;
      }

      &:hover {
        color: #fff;
        background-color: #7367ef;
      }
    }
  }
}
</style>