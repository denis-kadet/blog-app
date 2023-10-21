<template>
    <div class="container">
        <div class="row py-5 justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                    <div class="card-body p-4 p-md-5">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Форма авторизации</h3>
                        <div class="row">
                            <div class="text-danger" v-if="error">{{ this.error }}</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="inputPassword" class="form-label">Пароль</label>
                                <input v-model="password" type="password" class="form-control" id="inputPassword">
                            </div>
                            <div class="mb-3">
                                <input @click.prevent="login" class="btn btn-primary" type="submit" value="Вход">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
import r from '../route';

//TODO добавить токен для запоминания пользователя

export default {
    name: "Authlogin",
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(r("login"),
                    {
                        email: this.email,
                        password: this.password,
                    }).then((response) => {
                        console.log(response);
                        if (!response.data.success) {
                            this.error = response.data.message;
                        }
                        localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                        this.$router.push('/');
                    }).catch(errors => {
                        console.log(errors.response);
                        if (errors.response != undefined && errors.response.status == 403) {
                            console.log(errors.response.data.errors);
                            this.error = errors.response.data.errors;
                        } else {
                            console.log(errors.message)
                        }
                    }
                    );
            });

        }
    },
    mounted() {
        console.log('Component login mounted.');
    },
}
</script>
