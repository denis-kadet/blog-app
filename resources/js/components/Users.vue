<template>
    <ul class="">
        <li class="dfdfdf" v-for="user in users">{{ user.nickname }}</li>
    </ul>
</template>



<script>
import axios from 'axios';
import r from '../route';

export default {
    name: "Users",
    data() {
        return {
            users: []
        }
    },

    computed: {
        cUsers: function () {
            return this.users;
        }
    },

    methods: {
        getUsers() {
            axios.get(r("users.index"))
                .then((response) => {
                    this.users = response.data.data
                    localStorage.getItem('token');
                }).catch(function (error) {
                    console.log(error.response);
                });
        }
    },

    mounted() {
        this.getUsers();
        console.log('Component users mounted.')
    }
}
</script>
