<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button type="button" v-on:click=play()>Play</button>
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

    export default {
        name: 'MergeSort',
        data() {
            return {
                msg: 'Merge Sort'
            }
        },
        methods: {
            play: function () {
                let loop = false;
                let easing = 'linear';
                let direction = 'alternate';

                // anime({
                //     targets: '.b1',
                //     translateX: 0,
                //     translateY: 5,
                //     easing,
                //     loop,
                //     direction,
                //     background: [
                //         {value: '#ffec42'},
                //         {value: '#ff0038'}
                //     ]
                // });
                let boxTimeline = anime.timeline({
                    loop,
                    direction
                });

                let xTrans = [{value: 100},
                    {value: 200},
                    {value: 300},
                    {value: 400},
                    {value: 500},
                    {value: 600}];
                let bgcolor = [{value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#ffffff'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'},
                    {value: '#00ff00'}];

                let duration = 16000;

                boxTimeline
                    .add({
                        targets: '.b1',
                        translateY: [{value: '-20'},
                            {value: '-40'},
                            {value: '-80'},
                            {value: 0},
                            {value: 85},
                            {value: 220}],
                        translateX: xTrans,
                        background: bgcolor,
                        duration: duration,
                        offset: 0,
                        easing
                    }).add({
                    targets: '.b2',
                    translateY: [{value: '-20'},
                        {value: '-40'},
                        {value: '-60'},
                        {value: '-110'},
                        {value: '-25'},
                        {value: 110}],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                    targets: '.b3',
                    translateY: [{value: '-20'},
                        {value: '-20'},
                        {value: '-40'},
                        {value: 20},
                        {value: 30},
                        {value: 165}],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                    targets: '.b4',
                    translateY: [{value: '-20'},
                        {value: '-20'},
                        {value: '-90'},
                        {value: '-90'},
                        {value: '-190'},
                        {value: '-165'}],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                    targets: '.b5',
                    translateY: [{value: 20},
                        {value: 20},
                        {value: 0},
                        {value: 20},
                        {value: 20},
                        {value: '-165'},],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                    targets: '.b6',
                    translateY: [{value: 20},
                        {value: 20},
                        {value: 20},
                        {value: 20},
                        {value: 75},
                        {value: 55}],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                }).add({
                    targets: '.b7',
                    translateY: [{value: 20},
                        {value: 40},
                        {value: 40},
                        {value: 40},
                        {value: '-35'},
                        {value: '-220'}],
                    translateX: xTrans,
                    background: bgcolor,
                    duration: duration,
                    offset: 0,
                    easing
                })
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
        width: 20px;
        height: 20px;
        border: 10px solid green;
        padding: 5px;
        margin: 5px;
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
