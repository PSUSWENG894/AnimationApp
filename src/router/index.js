import Vue from 'vue'
import Router from 'vue-router'
import QuickSort from '@/components/QuickSort'
import MergeSort from '@/components/MergeSort'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/quick-sort',
            name: 'QuickSort',
            component: QuickSort
        },
        {
            path: '/merge-sort',
            name: 'MergeSort',
            component: MergeSort
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
