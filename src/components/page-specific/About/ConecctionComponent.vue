<script setup>
// Imports
import { ref, reactive } from 'vue';
import { getUsers } from '@/services/apisAbout/apiUsers';

const users = reactive(getUsers());

const activeIcon = ref('fa-solid fa-user-plus')

const toggleIcon = (index) => {

    users[index].icon = 
        users[index].icon === 'fa-solid fa-user-plus'
        ? 'fa-solid fa-user-check'
        : 'fa-solid fa-user-plus';
};

</script>

<template>
    <div class="conecction"> 
        <h3>Connections</h3>
        <div class="connection-item" v-for="(user, index) in users" key="index">
            <img :src="user.avatar" :alt="user.name" class="avatar">

            <div>
                <p class="name">{{ user.name }}</p>
                <p class="conecctions">{{ user.connections }}</p>
            </div>
            <button @click="toggleIcon(index)" :class="['btn-icon', { active: activeIcon === user.icon }]"><i :class="user.icon"></i></button>
        </div>
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
        font-size: 16PX;
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
                color: #7367EF;
                font-size: 14px;
            }

            &.active {
                background-color: #7367EF;

                i {
                    color: white;
                }
            }

            &:hover {
                transition: ease 0.5s;
                background-color: #7367EF;

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
    color: #7367EF;
    text-decoration: none;
}
</style>