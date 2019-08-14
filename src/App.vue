<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabs/>
  </div>
</template>

<script>
import Tabs from "./components/Tabs";
export default {
  components: {
    [Tabs.name]: Tabs
  }
};
</script>

<style>
</style>
