<template>

    <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
        <md-tab id="tab-merge-sort" md-label="Merge Sort" to="/merge-sort"></md-tab>
        <md-tab id="tab-quick-sort" md-label="Quick Sort" to="/quick-sort"></md-tab>
    </md-tabs>

</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                msg: 'Welcome to My Animation App!'
            }
        }
    }

</script>

<style scoped>

</style>