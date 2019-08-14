

const state = {
    bannerList:[],
    showList:[]
}


const mutations = {
    setBanner(state,param){
        state.bannerList = param
    },
    setShow(state,param){
        state.showList = param
    }
}


const actions = {
    
    async getBannerAction(context){
        let result = {}
        result = require('../../data/banner.json');
        let newData = result.data.map(({bannerId,imgUrl})=>({bannerId,imgUrl}))
        context.commit('setBanner',newData)
    },


    async getShowAction(context){
        
        let result = {}
        result = require('../../data/show.json')
        //console.log(result);
        let newData = result.data.films.map(item=>{
            
            return{
                id:item.filmId,
                poster:item.poster,
                name:item.name,
                filmType:item.filmType.name,
                grade:item.grade,
                actors:item.actors.map(value=>{
                    return {
                        name: value.name
                    }
                }),
                nation:item.nation,
                runtime:item.runtime,
            }
            
        }) 
        console.log(newData);
        
        context.commit('setShow',newData)
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}