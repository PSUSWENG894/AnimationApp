<template>
    <div id="app">
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
        <md-toolbar>
            <h1 class="md-title">Animation App</h1>
        </md-toolbar>
        <navigation></navigation>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation";

    export default {
        name: 'App',
        components: {Navigation}
    }
</script>

<style>

    @import '~vue-material/dist/vue-material.min.css';
    @import '~vue-material/dist/theme/default-dark.css';


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
