import Vue from 'vue'
import Vuex from 'vuex'
import documentTypes from './modules/documentType'

Vue.use(Vuex)
const debug =  process.env.NODE_ENV !== 'production' 
export default new Vuex.Store({
    modules:{
        documentTypes:documentTypes
    },
    strict: debug,
   
})