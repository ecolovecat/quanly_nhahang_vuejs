<template>
    <Header/>
    <p>This is update page</p>
    <form class="create">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Adress" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="updateRestaurant">Update</button>
    </form>
</template>

<script>
    import Header from "./Header.vue";
    import axios from "axios";
    export default {
        name: "UpdateRestaurant",
        components: {
            Header,
        },
        data() {
            return {
                restaurant: {
                    name:"",
                    address:"",
                    contact:""
                }
            }
        },
        methods:{
            async updateRestaurant() {
                let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                });

                if (result.status == 200) {
                    this.$router.push({name:"HomePage"});
                }
            }
        },
        async mounted() {
            let user_info = localStorage.getItem("user-info");
            if (!user_info) {
                this.$router.push({name:"LoginPage"});
            }

            let result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
            this.restaurant = result.data;
        }
    }
    
    
</script>

<style>

</style>

