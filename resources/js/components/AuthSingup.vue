<template>
    <div class="container">
        <section class="gradient-custom py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-lg-9 col-xl-7">
                    <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">

                        <div class="card-body p-4 p-md-5">
                            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Форма регистрации</h3>
                            <div class="row">
                                <div class="col-md-6 mb-4 pb-2">
                                    <div class="form-outline">
                                        <div v-if="errors && errors.has('email')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('email')[0] }}
                                        </div>
                                        <input type="email" v-model="user.email" maxlength="50" id="emailAddress" required
                                            class="form-control form-control-lg " v-bind:class="emailValid" />
                                        <label class="form-label" for="emailAddress">Email</label>
                                    </div>

                                </div>
                                <div class="col-md-6 mb-4 pb-2">
                                    <div class="form-outline">
                                        <div v-if="errors && errors.has('nickname')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('nickname')[0] }}
                                        </div>
                                        <input type="text" v-model="user.nickname" v-bind:class="nicknameValid"
                                            maxlength="50" class="form-control form-control-lg"
                                            id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                                        <label for="validationCustomUsername" class="form-label requer">Никнейм</label>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4 pb-2">
                                    <div class="form-outline">
                                        <div v-if="errors && errors.has('telephone')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('telephone')[0] }}
                                        </div>
                                        <input type="tel" v-model="user.telephone" v-bind:class="telValid" id="phoneNumber"
                                            class="form-control form-control-lg" @input="acceptNumber"
                                            placeholder="+7 (999) 888-77-22" />
                                        <label class="form-label" for="phoneNumber">Телефон</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <div v-if="errors && errors.has('firstname')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('firstname')[0] }}
                                        </div>
                                        <input type="text" v-model="user.firstname" maxlength="20" id="firstName"
                                            class="form-control form-control-lg" />
                                        <label class="form-label" for="firstName">Имя</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <div v-if="errors && errors.has('lastname')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('lastname')[0] }}
                                        </div>
                                        <input type="text" v-model="user.lastname" maxlength="30" id="lastName"
                                            class="form-control form-control-lg" />
                                        <label class="form-label" for="lastName">Фамилия</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4 d-flex align-items-center">
                                    <div class="form-outline datepicker w-100">
                                        <div v-if="errors && errors.has('birtday')" id="validationServerUsernameFeedback"
                                            class="invalid-feedback">
                                            {{ this.errors.get('birtday')[0] }}
                                        </div>
                                        <input type="date" v-model="user.birtday" class="form-control form-control-lg"
                                            id="birthdayDate" />
                                        <label for="birthdayDate" class="form-label">Дата рождения</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <h6 class="mb-2 pb-1">Пол: </h6>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="user.gender" id="femaleGender"
                                            value="F" checked />
                                        <label class="form-check-label" for="femaleGender">Жен</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="user.gender" id="maleGender"
                                            value="M" />
                                        <label class="form-check-label" for="maleGender">Муж</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="user.gender" id="otherGender"
                                            value="N" />
                                        <label class="form-check-label" for="otherGender">Other</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="mb-3 form-outline">
                                    <div v-if="errors && errors.has('password')" id="validationServerUsernameFeedback"
                                        class="invalid-feedback">
                                        {{ this.errors.get('password')[0] }}
                                    </div>

                                    <input type="password" v-model="user.password" v-bind:class="passwordValid"
                                        maxlength="25" class="form-control" id="exampleInputPassword1">
                                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                                </div>
                                <div class="mb-3 form-outline">
                                    <div v-if="errors && errors.has('password_confirm')"
                                        id="validationServerUsernameFeedback" class="invalid-feedback">
                                        {{ this.errors.get('password_confirm')[0] }}
                                    </div>

                                    <input type="password" v-model="user.password_confirm"
                                        v-bind:class="passwordConfirmValida" maxlength="25" class="form-control"
                                        id="exampleInputPassword2">
                                    <label for="exampleInputPassword2" class="form-label">Повторите пароль</label>
                                </div>
                            </div>
                            <!-- TODO! https://jsfiddle.net/0gd00Lrd/ добавить :disable -->
                            <div class="mt-4 pt-2">
                                <input @click.prevent="getDataSubmit" class="btn btn-primary btn-lg" type="submit"
                                    value="Отправить" />
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
            user: {
                email: '',
                nickname: '',
                firstname: '',
                lastname: '',
                birtday: '',
                telephone: '',
                gender: 'N',
                password: '',
                password_confirm: '',
            },
            errors: null,
        }
    },
    computed: {
        //TODO реализовать всплывашки уточнающие данные
        emailValid: function () {
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                val = this.user.email;

            if (val.length > 0) {
                if (!val.match(pattern)) {
                    return { 'is-invalid': true };
                } else if (val.match(pattern) && (this.errors && this.errors.has('email'))) {
                    //TODO! по сделал так, но надо как-то создать массив и туда добавить значение, если почта уже зарегистирирована 
                    this.errors.delete('email')
                    return { 'is-invalid': true };
                } else {
                    return { 'is-valid': true };
                }
            }
        },
        telValid: function () {
            //TODO! провести рефакторинг данного кода
            var patternMatch = /^7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/,
                val = this.user.telephone,
                x = val.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/),
                y = !x[3] ? x[1] + x[2] : x[1] + x[2] + x[3] + (x[4]) + (x[5]);
            //очищаем форму
            if (val.length == 4) {
                this.user.telephone = '';
            }

            if (val.length > 0 && y.match(patternMatch)) {
                return { 'is-valid': true };
            } else if ((val.length > 0 && val.length != 4) || (this.errors && this.errors.has('telephone')) && !y.match(patternMatch)) {
                return {
                    'is-invalid': true
                };
            }
        },
        nicknameValid: function () {
            //@TODO! паттерн для проверки на латинские буквы
            var val = this.user.nickname;

            if (val.length > 0 && this.errors && this.errors.has('nickname')) {
                this.errors.delete('nickname')
                return { 'is-invalid': true };
            } else if (val.length > 0) {
                return { 'is-valid': true };
            }
        },
        passwordValid: function () {
            var val = this.user.password,
                regularExpression = /^(?=.*[0-9])(?=.*[!@#$%()^&*])[a-zA-Z0-9!@#()$%^&*]{8,25}$/;

            //не менее 8 символов
            if (val.length < 8 && val.length > 0) {
                return { 'is-invalid': true };
            }
            //проверка на регулярку
            if(!regularExpression.test(val)){
                return { 'is-invalid': true }; 
            }

            if (this.errors && this.errors.has('password')) {
                this.errors.delete('password')
                return { 'is-invalid': true };
            } else if (val.length >= 8) {
                return { 'is-valid': true };
            }
        },
        passwordConfirmValida: function () {
            var valPasswordConfirm = this.user.password_confirm,
                valPasswoed = this.user.password;

            if (valPasswoed != valPasswordConfirm && valPasswordConfirm.length > 0) {
                return { 'is-invalid': true };
            }

            if (valPasswordConfirm.length > 0) {
                if (this.errors && this.errors.has('password_confirm')) {
                    this.errors.delete('password_confirm')
                    return { 'is-invalid': true };
                } else if (valPasswordConfirm.length > 0) {
                    return { 'is-valid': true };
                }
            } else if (valPasswordConfirm.length == 0 && this.errors && this.errors.has('password_confirm')) {
                this.errors.delete('password_confirm')
                return { 'is-invalid': true };
            }
        }
    },

    // watch: {
    //     'user.email':function(val){
    //         var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //         if(val.length > 0){
    //             if( val.match(pattern)){
    //                  console.log(val.match(pattern)) 
    //                 return {'is-valid': true};
    //             }else{
    //                 return 'is-invalid';
    //             }
    //         }
    //     } 
    // },
    methods: {
        getDataSubmit() {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post(r("signup"),
                    {
                        email: this.user.email,
                        nickname: this.user.nickname,
                        firstname: this.user.firstname,
                        lastname: this.user.lastname,
                        birtday: this.user.birtday,
                        telephone: this.telNumber(),
                        gender: this.user.gender,
                        password: this.user.password,
                        password_confirm: this.user.password_confirm,
                    }).then((response) => {
                        console.log(response.data.created)
                        if (response.data.created) {
                            //TODO! переделать перехват ошибок https://stackoverflow.com/questions/48656993/best-practice-in-error-handling-in-vuejs-with-vuex-and-axios
                            this.$router.push({ name: 'AuthLogin' })
                        } else {
                            this.errors = response.data.message
                        }
                    }).catch(errors => {
                        var input = errors.response.data.errors,
                            error = new Map();

                        for (const key in input) {
                            var val = input[key];
                            error.set(key, val);
                        }

                        this.errors = error;

                        console.log(error);
                    });
            });
        },
        acceptNumber() {
            var x = this.user.telephone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if (x[1] === '7' || x[1] === '8') {
                x[1] = '+7'
            } else {
                x[2] = x[1]
                x[1] = '+7'
            }

            this.user.telephone = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
        },
        telNumber() {
            var x = this.user.telephone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/),
                y = !x[3] ? x[1] + x[2] : x[1] + x[2] + x[3] + (x[4]) + (x[5]);

            return y;
        },
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

.form-outline {
    position: relative;
}

.invalid-feedback {
    position: absolute;
    top: -30px;
}
</style>