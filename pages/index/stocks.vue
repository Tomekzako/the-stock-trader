<template>
    <el-row :gutter="30" type="flex" class="stocks">
        <stock 
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"/>
    </el-row>
</template>

<script>
import Stock from '../../components/Stock'
export default {
    components: {
        Stock
    },
    computed: {
        stocks() {
            return this.$store.getters['stocks/getStocks'];
        }
    }
}
</script>

<style lang="scss" scoped>
    .stocks {
        flex-wrap: wrap;
    }
</style>


