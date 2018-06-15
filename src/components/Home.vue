<template>
    <div class="main">
        <h1>{{ msg }}</h1>
        <button type="button" v-on:click=play()>Play</button>
        <div class="container">
            <div class="bar bar1"></div>
            <div class="ball"></div>
            <div class="bar bar2"></div>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'

    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Welcome'
            }
        },
        methods: {
            test() {
                console.log("Hello")
            },
            play() {
                var loop = true;
                var easing = 'linear';
                var direction = 'alternate';

                anime({
                    targets: '.ball',
                    translateX: 470,
                    translateY: 100,
                    easing,
                    loop,
                    direction,
                    background: [
                        {value: '#573796'},
                        {value: '#FB89FB'},
                        {value: '#FBF38C'},
                        {value: '#18FF92'},
                        {value: '#5A87FF'}
                    ]
                })
                var ballTimeline = anime.timeline({
                    loop,
                    direction
                })
                var bar2Timeline = anime.timeline({
                    loop,
                    direction
                })
                var bar1Timeline = anime.timeline({
                    loop,
                    direction
                })
                ballTimeline
                    .add({
                        targets: '.ball',
                        translateY: 100,
                        translateX: 470,
                        easing
                    }).add({
                    targets: '.ball',
                    translateY: 0,
                    translateX: 0,
                    easing
                }).add({
                    targets: '.ball',
                    translateY: '-80',
                    translateX: 470,
                    easing
                })
                bar2Timeline
                    .add({
                        targets: '.bar2',
                        translateY: 100,
                        easing,
                        background: '#573796'
                    }).add({
                    targets: '.bar2',
                    translateY: 0,
                    easing,
                    background: '#FB89FB'
                }).add({
                    targets: '.bar2',
                    translateY: '-100',
                    easing,
                    background: '#FBF38C'
                })
                bar1Timeline
                    .add({
                        targets: '.bar1',
                        translateY: '-80',
                        easing,
                        background: '#18FF92'
                    }).add({
                    targets: '.bar1',
                    translateY: 10,
                    easing,
                    background: '#5A87FF'
                }).add({
                    targets: '.bar1',
                    translateY: 60,
                    easing,
                    background: '#FF1461'
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        background: #000000;
        text-align: center;;
    }

    .main {
        background: white;
        align-content: center;
    }

    .container {
        width: 500px;
        display: inline-block;
        transform: translateY(200px);
    }

    .bar {
        background: black;
        width: 10px;
        height: 100px;
    }

    .bar1 {
        float: left;
    }

    .bar2 {
        float: right;
    }

    .ball {
        background: black;
        width: 10px;
        height: 10px;
        position: relative;
        top: 45px;
        left: 10px;
    }
</style>
