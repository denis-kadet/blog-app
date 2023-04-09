import Vue from 'vue';
import ExampleComponent from './components/ExampleComponent';

require('./bootstrap');

const app = new Vue({
    el: '"app',

    components:{
        ExampleComponent,
    }
})
