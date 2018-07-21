<template>
    <div>
        <ControlButtons v-bind:play="play" v-bind:pause="pause" v-bind:restart="restart"/>
        <br><br>
        <div>
            <div class="box b1">
                38
            </div>
            <div class="box b2">
                27
            </div>
            <div class="box b3">
                43
            </div>
            <div class="box b4">
                3
            </div>
            <div class="box b5">
                9
            </div>
            <div class="box b6">
                82
            </div>
            <div class="box b7">
                10
            </div>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'
    import ControlButtons from './ControlButtons'

    export default {
        name: 'MergeSort',
        components: {ControlButtons},
        data: function () {

            return {
                msg: "Quick Sort",
                boxTimeline: null,
                loaded: false,
            }
        },

        mounted: function () {
            let loop = false;
            let easing = 'linear';
            let direction = 'alternate';

            this.boxTimeline = anime.timeline({
                loop,
                direction,
                autoplay: false,
            });

            let xTrans = [{value: 100},
                {value: 200},
                {value: 300},
                {value: 400},
                {value: 500},
                {value: 600},
                {value: 700},
                {value: 800}];

            let duration = 16000;

            this.boxTimeline
                .add({
                    targets: '.b1',
                    translateY: [{value: 0},
                        {value: 215},
                        {value: 215},
                        {value: 215},
                        {value: 215},
                        {value: 215},
                        {value: 215},
                        {value: 215}],
                    translateX: xTrans,
                    background: [{value: '#ff0000'},
                        {value: '#00ff00'},
                        {value: '#00ff00'},
                        {value: '#00ff00'},
                        {value: '#00ff00'},
                        {value: '#00ff00'},
                        {value: '#00ff00'},
                        {value: '#00ff00'}],
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                targets: '.b2',
                translateY: [{value: 0},
                    {value: '-60'},
                    {value: 105},
                    {value: 105},
                    {value: 105},
                    {value: 105},
                    {value: 105},
                    {value: 105}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            }).add({
                targets: '.b3',
                translateY: [{value: 0},
                    {value: 160},
                    {value: 160},
                    {value: 160},
                    {value: 160},
                    {value: 160},
                    {value: 160},
                    {value: 160}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            }).add({
                targets: '.b4',
                translateY: [{value: 0},
                    {value: '-115'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            }).add({
                targets: '.b5',
                translateY: [{value: 0},
                    {value: '-115'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'},
                    {value: '-170'}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            }).add({
                targets: '.b6',
                translateY: [{value: 0},
                    {value: 50},
                    {value: 50},
                    {value: 50},
                    {value: 50},
                    {value: 50},
                    {value: 50},
                    {value: 50}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            }).add({
                targets: '.b7',
                translateY: [{value: 0},
                    {value: '-170'},
                    {value: '-225'},
                    {value: '-225'},
                    {value: '-225'},
                    {value: '-225'},
                    {value: '-225'},
                    {value: '-225'}],
                translateX: xTrans,
                background: [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ff0000'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}],
                duration: duration,
                offset: 0,
                easing
            });
            this.loaded = true;
        },
        methods: {
            play() {
                this.boxTimeline.play();
            },
            pause() {
                this.boxTimeline.pause();
            },
            restart() {
                this.boxTimeline.restart();
                this.boxTimeline.pause();
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
        width: 50px;
        height: 50px;
        border: 10px solid green;
        padding: 5px;
        margin: 5px;
        background-color: white;
    }

    .b1 {
    }

    .b2 {
    }

    .b3 {
    }

    .b4 {
    }

    .b5 {
    }

    .b6 {
    }

    .b7 {
    }
</style>
