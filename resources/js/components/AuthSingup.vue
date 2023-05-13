<template>
    <div class="">
        <router-link :to="{ name: 'singup' }">Singup</router-link>
    </div>
</template>



<script>
export default {
    name: "Singup",
    mounted() {
        // axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        // axios.defaults.headers.common['Accept'] = 'application/json';
        console.log('Component Singup mounted.')
    }
}
</script>
