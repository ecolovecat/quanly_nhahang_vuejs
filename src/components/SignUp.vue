<template>
    <img src="../../public/img/logo.jpg" alt="">
    <h1>Sign Up</h1>
    
    <div class="register">
        <input type="email" v-model="email" placeholder="Enter email"/>
        <input type="text" v-model="name" placeholder="Enter name"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp" type="submit">Register</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
            
        },
        methods: {
            async signUp() {
                const result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                console.log(result);
                if (result.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({name:"HomePage"});
                }
            }
        },
        mounted() {
            let user_info = localStorage.getItem("user-info");
            if (user_info) {
                this.$router.push({name:"HomePage"});
            }
        }
    }
</script>

<style>
    
</style>