<template>
  <div id="movie">
    <appscroll style="width:100%;height:100%">
       <Banner></Banner>
      <nav>
        <li v-for="(item,index) in List" :key="item.id" @click="newAction(index)">
          <span :class="{active:selectIndex===index}">{{item.name}}</span>
        </li>
      </nav>
      <keep-alive>
        <NavLeft v-if="selectIndex===0"></NavLeft>
        <NavRight v-else></NavRight>
      </keep-alive>
    </appscroll>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import Banner from "./children/banner";
import NavLeft from "./children/nav_left";
import NavRight from "./children/nav_right";
import appscroll from '../../components/Scroll'
export default {
  name: "movie",
  components: {
    BetterScroll,
    Banner,
    NavLeft,
    NavRight,
    appscroll
  },
  data() {
    return {
      List: [{ name: "正在热映", id: "123" }, { name: "即将上映", id: "124" }],
      selectIndex: 0
    };
  },
  methods: {
    newAction(index) {
      this.selectIndex = index;
      this.voicePrompt('created i love you a b c d');
    }
  }
};
</script>


<style lang="scss" scoped>
#movie {
    width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0; 
  nav {
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    display: flex;
    text-align: center;
    li {
      flex: 1;
      span {
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        width: 56px;
      }
    }
  }
  .active {
    padding: 10px 0;
    border-bottom: 2px solid #ff5f16;
    color: #ff5f16;
  }
}
</style>
