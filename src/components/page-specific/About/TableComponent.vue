<script setup>
// Imports
import { ref, computed, onMounted } from "vue";
import { getProjects } from "@/services/apisAbout/apiPojects";

// Estados
const projects = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 5;

// Cargar los proyectos de manera asíncrona
onMounted(async () => {
  const response = await getProjects();
  projects.value = response; // Asume que la respuesta es un array de proyectos
});

const filteredProjects = computed(() => {
  // Verificar si projects.value es definido antes de intentar usarlo
  if (!projects.value) return [];

  const filtered = projects.value.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return filtered.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => {
  if (!projects.value) return 1;
  return Math.ceil(projects.value.length / itemsPerPage);
});

const changePage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

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
      <input type="text" v-model="searchQuery" placeholder="Search Project" />
    </div>

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Project</th>
          <th>Leader</th>
          <th>Team</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in filteredProjects" :key="project.id">
          <td><input type="checkbox" /></td>
          <td>
            <div class="project-info">
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
              <img
                v-for="(member, index) in project.team"
                :key="index"
                :src="member.avatar"
                :alt="member.name"
                class="team-avatar"
              />
              <span v-if="project.extraTeamMembers"
                >+{{ project.extraTeamMembers }}</span
              >
            </div>
          </td>
          <td>
            <div class="progress-bar">
              <div
                class="progress"
                :style="{ width: project.progress + '%' }"
              ></div>
            </div>
            <div class="progress-percentage">{{ project.progress }}%</div>
          </td>
          <td>
            <button class="action-button">...</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
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

    h3 {
      margin: 0;
      font-weight: 600;
      font-size: 1.5rem;
    }

    input {
      height: 38px;
      width: 200px;
      border-radius: 4px;
      padding: 0.5rem;
      border: 1px solid #ccc;
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
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }

      span {
        width: 24px;
        height: 24px;
        color: #555;
        font-weight: 700;
        border-radius: 50%;
        text-align: center;
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
        background-color: #7367EF;
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
      color: #7367EF;
      padding: 0.5rem 1rem;
      background-color: rgb(233, 233, 233);
      border: 1px solid rgb(233, 233, 233);
      border-radius: 8px;

      &.active {
        color: #fff;
        background-color: #7367EF;
      }

      &:hover {
        color: #fff;
        background-color: #7367EF;
      }
    }
  }
}
</style>
