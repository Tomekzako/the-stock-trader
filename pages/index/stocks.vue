<template>
    <el-row :gutter="30" type="flex" class="stocks">
        <stock 
            v-for="stock in stocks"
            :key="stock.id"/>
    </el-row>
</template>

<script>
import Stock from '../../components/Stock'
export default {
    data() {
        return {
            stocks: [
                {id: 1, name: 'BMV', price: 110},
                {id: 2, name: 'Google', price: 200},
                {id: 3, name: 'Apple', price: 250},
                {id: 4, name: 'Twitter', price: 8},
            ]
        }
    },
    components: {
        Stock
    }
}
</script>

<style lang="scss" scoped>
    .stocks {
        flex-wrap: wrap;
    }
</style>


