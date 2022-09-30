<template>
    <Header/>
    <p>Welcome {{name}}, This is home page</p>
    <table>
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
        </tr>

        <tr v-for="item in restaurant" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td><router-link :to="'/update/'+item.id">Update</router-link><button v-on:click="deleted(item.id)">Delete</button></td>
            
        </tr>
    </table>
</template>

<script>
    import Header from "./Header.vue";
    import axios from "axios";
    export default {
        name: "HomePage",
        data() {
            return {
                name:"",
                restaurant:[]
            }
        },
        components: {
            Header,
        },
        methods:{
            async deleted(id) {
                let result = await axios.delete("http://localhost:3000/restaurants/"+id);
                if (result.status == 200) {
                    this.loadData();
                    
                }
            },

            async loadData() {
                let user_info = localStorage.getItem("user-info");
                
                if (!user_info) {
                    console.log("user info not be inited");
                    this.$router.push({name:"LoginPage"});
                } else {
                    this.name = JSON.parse(user_info).name
                    let result = await axios.get("http://localhost:3000/restaurants");
                    this.restaurant = result.data
                }
                
                }
        },
        async mounted() {
            let user_info = localStorage.getItem("user-info");
                if (!user_info) {
                    console.log("user info not be inited");
                    this.$router.push({name:"LoginPage"});
                } else {
                    console.log("user info inited")
                }
        }
    }
    
    
</script>

<style>
    table {
        border: 1px solid black;
        margin: 0 auto;
        width: 70%;
    }
    td, th {
        border: 1px solid black;
        width: 300px;
        height: 100px;
    }
</style>

