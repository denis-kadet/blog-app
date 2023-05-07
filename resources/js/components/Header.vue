<template>
<div class="">
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div v-if="isLogin" class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><router-link :to="{ name: 'login' }">Login</router-link></button>
          <button type="button" class="btn btn-warning"><router-link :to="{ name: 'singup' }">Sing-up</router-link></button>
        </div>
        <div v-else class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="32" height="32">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a @click.prevent="logout" class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>

      </div>
    </div>
  </header>
</div>
</template>



<script>
import axios from 'axios';
import r from '../route';

export default {
    name: "Header",
    data() {
        return {
            isLogin: '',
        }
    },
    computed: {
        cHeader: function () {
            return this.isLogin;
        }
    },
    methods: {
        getData() {
                console.log(window.Laravel.isLoggedin);
                if(!window.Laravel.isLoggedin){
                    this.isLogin = true;
                }else{
                    this.isLogin = false;
                }
        },
        logout() {
            axios.post(r('logout'))
            .then(res => {
                this.$router.push({name: 'login'});
            })
        }
    },
    mounted() {
        this.getData(),
        console.log('Component Header mounted.')
    }
}
</script>
