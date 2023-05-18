<template>
    <div>
        <webapp-header />
        <main>
            <router-view></router-view>
        </main>
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
