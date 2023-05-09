<template>
    <div class="container">
        <div class="row">
            <div class="text-danger" v-if="error">{{ error }}</div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword">
            </div>
            <div class="mb-3">
                <input @click="login" class="btn btn-primary" type="submit" value="login">
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
import r from '../route';

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post(r("login"),
                    {
                        email: this.email,
                        password: this.password,
                    }).then((response) => {
                        console.log(response.data)
                        if (response.data.success) {
                            // localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                            this.$router.push('/')
                        } else {
                            this.error = response.data.message
                        }
                    }).catch(function (error) {
                        console.log(error.response.data.message);
                        var error = error.response.data.message;
                        return error;
                    });
            });

        }
    },
    mounted() {
        console.log('Component login mounted.');
    }
}
</script>
