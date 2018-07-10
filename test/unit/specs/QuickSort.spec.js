import Vue from 'vue'
import QuickSort from '@/components/QuickSort'

describe('QuickSort.vue', () => {
    it('all elements should be present', () => {
        const Constructor = Vue.extend(QuickSort);
        const vm = new Constructor().$mount();

        let b1 = vm.$el.querySelector('.b1');
        let b2 = vm.$el.querySelector('.b2');
        let b3 = vm.$el.querySelector('.b3');
        let b4 = vm.$el.querySelector('.b4');
        let b5 = vm.$el.querySelector('.b5');
        let b6 = vm.$el.querySelector('.b6');
        let b7 = vm.$el.querySelector('.b7');

        expect(b1).to.not.be.null;
        expect(b2).to.not.be.null;
        expect(b3).to.not.be.null;
        expect(b4).to.not.be.null;
        expect(b5).to.not.be.null;
        expect(b6).to.not.be.null;
        expect(b7).to.not.be.null; //test

    })
});
