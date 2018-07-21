<template>
    <div>
        <md-button class="md-icon-button md-raised" v-on:click="play()">
            <md-icon>play_circle_filled</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised" v-on:click="pause()">
            <md-icon>pause_circle_filled</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised" v-on:click="restart()">
            <md-icon>replay</md-icon>
        </md-button>
    </div>
</template>


<script>

    export default {
        name: "ControlButtons",
        props: {
            play: Function,
            pause: Function,
            restart: Function
        }
    }
</script>

<style scoped>

</style>