<template>
     <ul class="">
     <li class="dfdfdf" v-for="user in users">{{ user.nickname }}</li> 
     </ul>  
</template>



<script>
import axios from 'axios';
import r from '../route';

    export default {

        data (){
            return {
                users : []
            }
        },

        computed : {
            cUsers : function () {
                return this.users;
            }
        },

        methods:{
            getUsers(){
                axios.get(r("users.index"))
                .then((response) => {
                    this.users = response.data.data
                });
                console.log(this.users);
            }
        },

        mounted() {
            this.getUsers();
            console.log('Component mounted.')
        }
    }
</script>
