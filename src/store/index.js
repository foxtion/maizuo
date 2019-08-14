import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import cinema from './modules/cinema'
import odds from './modules/odds'
import mine from './modules/mine'
Vue.use(Vuex)


const store = new Vuex.Store({
     
       modules:{
        movie,
        cinema,
        odds,
        mine
       }
 });




export default store;



