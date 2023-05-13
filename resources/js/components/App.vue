<template>
    <div>
        <webapp-header />
        <router-view></router-view>
        <webapp-footer />
    </div>
</template>

<script>
import header from './TheHeader';
import footer from './TheFooter';

export default {
    name: 'App',
    components: {
        'webapp-header': header,
        'webapp-footer': footer,
    },
    mounted() {
        console.log('Component app mounted.')
    }
}
</script>
