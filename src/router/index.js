import Vue from 'vue'
import Router from 'vue-router'
import movie from './movie'
import cinema from './cinema'
import odds from './odds'
import mine from './mine'
Vue.use(Router)

const routes=[
    movie,
    cinema,
    odds,
    mine,
{
  path:'/',
  redirect:'/movie'
},
]
export default new Router({
mode: 'history',
  base: process.env.BASE_URL,
  routes
})




