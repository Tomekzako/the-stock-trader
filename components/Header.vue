<template>
  <el-menu
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <nuxt-link to="/" class="header_link">Stock Trader</nuxt-link>
    </el-menu-item>
    <el-menu-item index="2">
      <nuxt-link to="/portfolio" class="header_link">Portfolio</nuxt-link>
    </el-menu-item>
    <el-menu-item index="3">
      <nuxt-link to="/stocks" class="header_link">Stocks</nuxt-link>
    </el-menu-item>
    <el-submenu index="5" class="header_right">
      <template slot="title">Workspace</template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" class="header_right">End Day</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
    .header_link {
            text-decoration: none;
    }
    .el-menu--horizontal>.header_right {
        float: right;
    }
</style>