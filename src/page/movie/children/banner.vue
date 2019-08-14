<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
        <img :src="item.imgUrl" alt>
      </van-swipe-item>
    </van-swipe>

    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "banner",
  computed: {
    ...mapState({
      bannerList: state => state.movie.bannerList
    })
  },
  created() {
    this.$store.dispatch("movie/getBannerAction");
  }
};
</script>

<style lang="scss" scoped>
div {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
