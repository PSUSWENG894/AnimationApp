<template>
    <div>
        <ControlButtons v-bind:play="play" v-bind:pause="pause" v-bind:restart="restart"/>
        <br><br><br><br><br><br><br><br>
        <div>
            <div id="overlay">Under Construction!</div>
            <md-layout>
                <md-layout-item class="box m1 r1 b1">
                    1
                </md-layout-item>
                <md-layout-item class="box m1 r1 b2">
                    2
                </md-layout-item>
                <md-layout-item class="box m1 r1 b3">
                    3
                </md-layout-item>
                <md-layout-item class="blank">
                    &nbsp;
                </md-layout-item>
                <md-layout-item class="box m2 r1 b1">
                    1
                </md-layout-item>
                <md-layout-item class="box m2 r1 b2">
                    2
                </md-layout-item>
                <md-layout-item class="box m2 r1 b3">
                    3
                </md-layout-item>
                <md-layout-item class="blank">
                    &nbsp;
                </md-layout-item>
                <md-layout-item class="box m3 r1 b1">
                    1
                </md-layout-item>
                <md-layout-item class="box m3 r1 b2">
                    2
                </md-layout-item>
                <md-layout-item class="box m3 r1 b3">
                    3
                </md-layout-item>
            </md-layout>
        </div>
        <br><br>
        <div>
            <md-layout>
                <md-layout-item class="box m1 r2 b1">
                    4
                </md-layout-item>
                <md-layout-item class="box m1 r2 b2">
                    5
                </md-layout-item>
                <md-layout-item class="box m1 r2 b3">
                    6
                </md-layout-item>
                <md-layout-item class="multiply">
                    *
                </md-layout-item>
                <md-layout-item class="box m2 r2 b1">
                    4
                </md-layout-item>
                <md-layout-item class="box m2 r2 b2">
                    5
                </md-layout-item>
                <md-layout-item class="box m2 r2 b3">
                    6
                </md-layout-item>
                <md-layout-item class="equals">
                    =
                </md-layout-item>
                <md-layout-item class="box m3 r2 b1">
                    4
                </md-layout-item>
                <md-layout-item class="box m3 r2 b2">
                    5
                </md-layout-item>
                <md-layout-item class="box m3 r2 b3">
                    6
                </md-layout-item>
            </md-layout>
        </div>
        <br><br>
        <div>
            <md-layout>
                <md-layout-item class="box m1 r3 b1">
                    7
                </md-layout-item>
                <md-layout-item class="box m1 r3 b2">
                    8
                </md-layout-item>
                <md-layout-item class="box m1 r3 b3">
                    9
                </md-layout-item>
                <md-layout-item class="blank">
                    &nbsp;
                </md-layout-item>
                <md-layout-item class="box m2 r3 b1">
                    7
                </md-layout-item>
                <md-layout-item class="box m2 r3 b2">
                    8
                </md-layout-item>
                <md-layout-item class="box m2 r3 b3">
                    9
                </md-layout-item>
                <md-layout-item class="blank">
                    &nbsp;
                </md-layout-item>
                <md-layout-item class="box m3 r3 b1">
                    7
                </md-layout-item>
                <md-layout-item class="box m3 r3 b2">
                    8
                </md-layout-item>
                <md-layout-item class="box m3 r3 b3">
                    9
                </md-layout-item>
            </md-layout>
        </div>
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
    #overlay {
        position: fixed;
        display: block;
        width: 100%;
        font-size: 50pt;
        text-align: center;
        text-wrap: normal;
        vertical-align: middle;
        line-height: 600px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
    }
    .box {
        width: 50px;
        height: 50px;
        border: 10px solid green;
        padding: 10px;
        margin: 5px;
        background-color: white;
    }

    .blank {
        text-align: center;
        padding: 40px;
        color: white;
        font-size: 50px;
    }

    .multiply {
        text-align: center;
        padding: 35px;
        color: white;
        font-size: 50px;
    }

    .equals {
        text-align: center;
        padding: 30px;
        color: white;
        font-size: 50px;
    }

    .m1 {
    }

    .m2 {
    }

    .m3 {
    }

    .r1 {
    }

    .r2 {
    }

    .r3 {
    }

    .b1 {
    }

    .b2 {
    }

    .b3 {
    }

</style>