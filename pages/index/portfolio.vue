<template>
    <el-row :gutter="30" type="flex" class="stocks">
        <portfolio 
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"/>
    </el-row>
</template>

<script>
import Portfolio from '../../components/Portfolio';

export default {
    components: {
        Portfolio
    },
    computed: {
        stocks() {
            return this.$store.getters['portfolio/stockPortfolio'];
        }
    }
}
</script>

<style lang="scss" scoped>
    .stocks {
        flex-wrap: wrap;
    }
</style>