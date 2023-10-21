<template>
    <div class="body">
        <webapp-header />
        <main class="main">
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

<style>
/* Прижал футер к низу */
.body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  /* Чтобы занимал оставшееся пространство */
  flex-grow: 1;
}
</style>
