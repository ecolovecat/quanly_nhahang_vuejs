<template>
   <img src="../../public/img/logo.jpg" alt="">
    <h1>Login</h1>
    
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login" type="submit">Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "LoginPage",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            async login() {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                if (result.data.length > 0 && result.status == 200) {
                    localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                    this.$router.push({name:"HomePage"});
                } else {
                    alert("This account doesnt exist");
                }
            }
        },
        mounted() {
            let user_info = localStorage.getItem("user-info");
            if (user_info) {
                this.$router.push({name:"HomePage"})
            }
        }
    }
</script>

<style>

</style>