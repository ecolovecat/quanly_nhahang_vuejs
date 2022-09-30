<template>
    <Header/>
    <p>This is create page</p>
    <form class="create">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Adress" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="addRestaurant">Add</button>
    </form>
</template>

<script>
    import Header from "./Header.vue"
    import axios from "axios"
    export default {
        name: "CreateRestaurant",
        components: {
            Header,
        },
        data() {
            return {
                restaurant:{
                    name:"",
                    contact:"",
                    address:""
                }
            }
        },
        methods: {
            async addRestaurant() {
                let result = await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            if (result.status == 201) {
                this.$router.push({name:"HomePage"})
            }
            }
        },
        mounted() {
            let user_info = localStorage.getItem("user-info");
            if (!user_info) {
                this.$router.push({name:"LoginPage"});
            }
        }
    }
    
    
</script>

<style>

</style>

