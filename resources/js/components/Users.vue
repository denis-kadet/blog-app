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
            users: [],
            token: localStorage.getItem('token')
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
                }).catch((error) => {
                    console.log(error.response);
                });
        }
    },

    created() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        axios.defaults.headers.common['Accept'] = 'application/json';
        this.getUsers();
        console.log('Component users mounted.')
    }
}
</script>
