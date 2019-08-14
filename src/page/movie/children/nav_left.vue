<template>
  <div id="left">
    <div v-for="item in showList" :key="item.id">
      <div>
        <img :src="item.poster" alt>
      </div>
      <div>
        <span>{{item.name}}</span>
        <span>{{item.filmType}}</span>
        <br>
        <span>观众评分</span>
        <span>{{item.grade}}</span>
        <br>
        <span>主演：<div v-for="value  in item.actors" :key="value.id">{{value.name}}</div></span>
        <br>
        <span>{{item.nation}}丨{{item.runtime}}</span>
      </div> 
      <div>
          <span>购票</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav_left",
  computed: {
      ...mapState({
          showList: state => state.movie.showList
      
    })
  },
  created() {
      this.$store.dispatch("movie/getShowAction");
  },
  mounted() {
      //console.log(this.showList);
      
  },
};
</script>

<style>
</style>
