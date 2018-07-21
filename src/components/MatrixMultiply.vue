<template>
    <div>
        <ControlButtons v-bind:play="play" v-bind:pause="pause" v-bind:restart="restart"/>
    </div>
</template>


<script>
    import ControlButtons from './ControlButtons'

    export default {
        name: "MatrixMultiply",
        components: {ControlButtons},

        methods:
            {
                play() {
                    console.log("play");
                },

                pause() {
                    console.log("pause");
                },

                restart() {
                    console.log("restart");
                }
            }
    }


</script>

<style scoped>

</style>