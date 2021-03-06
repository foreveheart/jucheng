import Vue from 'vue'
import Vuex from 'vuex'

import city from './city'
import category from './category'
import cart from './cart'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        city,
        category,
        cart
    }
})

export default store