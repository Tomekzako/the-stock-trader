<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="header_menu">
        <nuxt-link tag="li" to="/" class="header_menu-item">Stock Trader</nuxt-link>
        <nuxt-link tag="li" to="/portfolio" class="header_menu-item">Portfolio</nuxt-link>
        <nuxt-link tag="li" to="/stocks" class="header_menu-item">Stocks</nuxt-link>
        <li class="header_menu-item header_menu-item-right">End Day</li>
        <li class="header_menu-item">
          <el-dropdown>
            <span class="el-dropdown-link">
              Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .header_menu {
    display: flex;
    list-style: none;
    background-color: #f6f6f6;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
  }
  .header_menu-item {
    padding: 20px;
    font-size: 16px;
    cursor: pointer;
    &:nth-of-type(1) {
      font-size: 18px;
    }
    &.nuxt-link-exact-active {
      background-color: #409EFF;
      color: #fff;
      font-weight: bold;
    }
  }

  .header_menu-item-right {
    margin-left: auto;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #000;
    font-size: 16px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu__item {
    color: inherit;
    &:focus, 
    &:not(.is-disabled):hover {
    background-color: #d3d3d3;
    color: inherit
}
  }
</style>