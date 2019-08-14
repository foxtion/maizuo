<template>
  <div id="tabs">
    <li>
      <router-link to="/movie">
        <i></i>
        <span>电影</span>
      </router-link>
    </li>
    <li>
      <router-link to="/odds">
        <i></i>
        <span>影院</span>
      </router-link>
    </li>
    <li>
      <router-link to="/cinema">
        <i></i>
        <span>优惠</span>
      </router-link>
    </li>
    <li>
      <router-link to="/mine">
        <i></i>
        <span>我的</span>
      </router-link>
    </li>
  </div>
</template>
<script>
export default {
  name: "Tabs"
};
</script>

<style lang="scss" scoped>
#tabs {
  height: 49px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  background: #fff;
  list-style: none;
  li {
    width: 25%;
    text-align: center;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      &.router-link-active span {
        color: #ff5f16;
      }
      i {
        display: block;
        background-image: url(/images/tab.png);
        background-size: 20px;
        width: 22px;
        height: 25px;
        margin: 0 auto;
        margin-top: 4px;
      }
      span {
        display: block;
        font-size: 12px;
        text-align: center;
      }
    }
  }
  li:nth-of-type(1) {
    a i {
      background-position: 0 123px;
    }
    a.router-link-active i {
      background-position: 0 -97px;
    }
  }
  li:nth-of-type(2) {
    a i {
      background-position: 1px -73px;
    }
    a.router-link-active i {
      background-position: 1px 197px;
    }
  }
  li:nth-of-type(3) {
    a i {
      background-position: -1px 86px;
      background-size: 25px;
    }
    a.router-link-active i {
      background-size: 20px;
      background-position: 1px 96px;
    }
  }
  li:nth-of-type(4) {
    a i {
      background-position: 0 24px;
      background-size: 24px;
    }
    a.router-link-active i {
      background-position: 0 54px;
    }
  }
}
</style>
