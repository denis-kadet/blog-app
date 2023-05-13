<template>
    <div class="container">
        <section class="gradient-custom">
            <div class="container py-5 h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">

                            <div class="alert alert-danger" role="alert" v-if="error !== null">
                                {{ error }}
                            </div>

                            <div class="card-body p-4 p-md-5">
                                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Форма регистрации</h3>
                                <!-- <form method="post"> -->
                                <div class="row">
                                    <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-outline">
                                            <div v-if="true" id="validationServerUsernameFeedback" class="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                            <div v-else class="valid-feedback">
                                                Looks good!
                                            </div>
                                            <input type="email" v-model="email" name="email" id="emailAddress"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="emailAddress">Email</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-outline">
                                            <input type="text" v-model="nickname" class="form-control form-control-lg"
                                                id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                                            <label for="validationCustomUsername" class="form-label requer">Никнейм</label>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-outline">
                                            <input type="tel" v-model="telephone" id="phoneNumber"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="phoneNumber">Телефон</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="text" v-model="firstname" id="firstName"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="firstName">Имя</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="text" v-model="lastname" id="lastName"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="lastName">Фамилия</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4 d-flex align-items-center">
                                        <div class="form-outline datepicker w-100">
                                            <input type="text" v-model="birtday" class="form-control form-control-lg"
                                                id="birthdayDate" />
                                            <label for="birthdayDate" class="form-label">Дата рождения</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <h6 class="mb-2 pb-1">Пол: </h6>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" v-model="gender" id="femaleGender"
                                                value="F" checked />
                                            <label class="form-check-label" for="femaleGender">Жен</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" v-model="gender" id="maleGender"
                                                value="M" />
                                            <label class="form-check-label" for="maleGender">Муж</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" v-model="gender" id="otherGender"
                                                value="N" />
                                            <label class="form-check-label" for="otherGender">Other</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Пароль</label>
                                        <input type="password" v-model="password" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword2" class="form-label">Повторите пароль</label>
                                        <input type="password" v-model="password_confirm" class="form-control"
                                            id="exampleInputPassword2">
                                    </div>
                                </div>

                                <div class="mt-4 pt-2">
                                    <input @click="getDataSubmit" class="btn btn-primary btn-lg" type="submit"
                                        value="Отправить" />
                                </div>

                                <!-- </form> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import axios from 'axios';
import r from '../route';

export default {
    name: "AuthSingup",
    data() {
        return {
            email: '',
            nickname: '',
            firstname: '',
            lastname: '',
            birtday: '',
            telephone: '',
            gender: 'N',
            password: '',
            password_confirm: '',
            error: null
        }
    },
    // onSubmit() {
    // console.log(this.email);
    // let productReview = {
    //     name: this.name,
    //     review: this.review,
    //     rating: this.rating
    // }
    // this.name = null
    // this.review = null
    // this.rating = null
    // },
    methods: {
        getDataSubmit() {
            console.log(this.email);
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post(r("signup"),
                    {
                        email: this.email,
                        nickname: this.nickname,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        birtday: this.birtday,
                        telephone: this.telephone,
                        gender: this.gender,
                        password: this.password,
                        password_confirm: this.password_confirm,
                    }).then((response) => {
                        console.log(response.data.created)
                        if (response.data.created) {
                            this.$router.push({ name: 'AuthLogin' })
                        } else {
                            this.error = response.data.message
                        }
                    }).catch(function (error) {
                        var object = error.response.data.errors,
                            error = [];
                        for (const key in object) {
                            var val = object[key],
                                allVal = key + ": " + val;
                            error.push(allVal);
                        }
                        console.log(error);
                        return error;
                    });
            });
        }
    },
    mounted() {
        console.log('Component AuthSingup mounted.')
    }
}
</script>

<style scoped>
.invalid-feedback {
    display: block !important;
}
</style>