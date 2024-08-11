<script setup>
// Imports
import { getTeams } from '@/services/apisAbout/apiTeams';

const teams = getTeams();

</script>

<template>
    <div class="teams">
        <h3>Teams</h3>
        <div class="team-item" v-for="(team, index) in teams" key="index">
            <i :class="team.icon"></i>
            <div>
                <p class="team-name">{{ team.name }}</p>
                <p class="team-members">{{ team.members }}</p>
            </div>
            <span :class="team.labelClass">{{ team.label }}</span>
        </div>
        <a href="#" class="view">View all Teams</a>
    </div>
</template>

<style scoped>

.teams {

    width: 450px;
    height: 440px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 16PX;
        color: #797878;
        margin-bottom: 0.5rem;
    }

    .team-item {

        display: flex;
        align-items: center;

        i {
            font-size: 2rem;
            font-weight: bold;
            margin-right: 1rem;
        }

        .fa-react {
            color: #74c0fc;
            border-radius: 50%;
            background-color: #dae4ec;
            box-shadow: 0 0 10px #74c0fc;
        }

        .fa-circle-stop {
            color: #ffb325;
            border-radius: 50%;
            background-color: #fcebcc;
            box-shadow: 0 0 10px #ffb325;
        }

        .fa-figma {
            color: #255fff;
            border-radius: 50%;
            background-color: #f8dddd;
            box-shadow: 0 0 10px #ffa3a3;
        }

        .fa-vuejs {
            color: #468d0b;
            border-radius: 50%;
            background-color: #d6e2cc;
            box-shadow: 0 0 10px #acc09c;
        }

        .fa-twitter {
            color: #74c0fc;
            border-radius: 50%;
            background-color: #dae4ec;
            box-shadow: 0 0 10px #74c0fc;
        }

        .team-name {

            font-size: 14px;
            margin-top: 20px;
            color: #5f5f5f;
            font-weight: bold;
        }

        .team-members {
            color: #999;
            font-size: 12px;
            margin-top: -20px;
        }

        .label {
            margin-left: auto;
            padding: 0.3rem 0.6rem;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: bold;
        }

        .developer {
            color: rgb(252, 32, 32);
            background-color: #ffd5d5;
        }

        .support {
            color: #6450fd;
            background-color: #e0dcff;
        }

        .designer {
            color: #23f5f5;
            background-color: #dfffff;
        }

        .marketing {
            color: gray;
            background-color: rgb(206, 206, 206);
        }
    }
}

.view {
    font-weight: bold;
    display: block;
    text-align: center;
    color: #7367EF;
    text-decoration: none;
}
</style>