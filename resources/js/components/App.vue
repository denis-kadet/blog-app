<template>
    <div>
        <webapp-header />
        <router-view></router-view>
    </div>
</template>

<script>
import header from './Header';

export default {
    name: 'App',
    components: {
        'webapp-header': header,
    },
    mounted() {
        console.log('Component app mounted.')
    }
}
</script>
