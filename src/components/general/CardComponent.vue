<script setup>

// Imports
import { ref } from 'vue';

// Image of backgroun
const fondoImg =  ref('public/img/fondo.jpg');
// Avatra
const avatar =  ref('public/img/avatar.jpg');

// Name
const name = ref('Jhon Doe');
// Role
const role = ref('Coder');
// Location
const location = ref('Medellin');
// joinedDate 
const joinedDate = ref('Joined April 2021')

</script>

<template>

    <div class="profile-card mt-4">
        <div class="profile-header">
            <img class="fondo-img" :src="fondoImg" alt="fondo">
        </div>

        <div class="profile-detall">
            <img class="avatar" :src="avatar" alt="avatra">
            <div class="info fw-bold">
                <h2>{{ name }}</h2>
                <div class="detalles">
                    <span class="role"> <i class="fa-solid fa-palette"></i> {{ role }}</span>
                    <span class="location"> <i class="fa-solid fa-location-dot"></i> {{ location }}</span>
                    <span class="joinedDate"> <i class="fa-solid fa-calendar-days"></i> {{ joinedDate }}</span>
                </div>
            </div>
            <button class="btn-connect fw-bold"><i class="fa-solid fa-user-check"></i> Connected</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/style.css';

.profile-card {

    width: 90%;
    //height: 295px;
    margin: auto;
    border-radius: 0.50rem;
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
    width: 100px;
    height: 100px;
    border-radius: 8px;
    position: relative;
    top: -40px;
    margin-right: 1rem;
}

.info {
    flex-grow: 1;
}

.detalles {

    display: flex;
    gap: 1rem;
    color: #777;

    .role, .location, .joinedDate {
        display: flex;
        align-items: center;
    }

    .fa-solid {
        margin-right: 0.5rem;
        color: #777;
    }
}

.btn-connect {

    width: 150px;
    height: 40px;
    background-color: #7367EF;
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