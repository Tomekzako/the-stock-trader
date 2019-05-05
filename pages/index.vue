<template>
  <el-container>
    <el-header>
      <app-header />
    </el-header>
    <el-main>
      <nuxt-child />
    </el-main>
  </el-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import appHeader from '~/components/Header.vue'

export default {
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch('stocks/initStocks');
  }
}
</script>

<style>

  body {
    padding: 30px;
  }

  .el-header {
    padding: 0;
  }

</style>
