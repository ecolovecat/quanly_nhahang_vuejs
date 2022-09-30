<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/create">Add Restaurant</router-link>
        <a v-on:click="logout" href="">Logout</a>
    </div>
</template>

<script>
    export default {
        name: "HeadDer",
        methods: {
            logout() {
                localStorage.clear();
            }
        }
    }
</script>

<style>
    .nav {
        background-color: rgb(102, 98, 98);
        overflow: hidden;
    }

    .nav a {
        float: left;
        color: azure;
        padding: 20px 30px;
        text-decoration: none;
    }
    .nav a:hover {
        background-color: bisque;
        color: black;
    }
</style>