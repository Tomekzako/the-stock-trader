<template>
    <el-col :span="8">
        <el-card class="card" :body-style="{ padding: '0' }">
            <div class="card_header">
                <h3 class="card_name">{{ stock.name }} <span>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span></h3>
            </div>
            <div class="card_main">
                <el-input
                    type="number" 
                    size="medium" 
                    placeholder="Quantity" 
                    class="card_input"
                    v-model="quantity">
                </el-input>
                <el-button 
                    type="primary" 
                    round
                    @click="sellStock"
                    :disabled="quantity <=0 || !Number.isInteger(parseFloat(quantity))">Sell</el-button>  
            </div>
        </el-card>
    </el-col>   
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.$store.dispatch('portfolio/sellStock', order);
            this.quantity = 0;
        }
    }
}
</script>


<style lang="scss" scoped>
    .card {
        margin: 20px 0;
        &_header {
            background-color: #409EFF;
            color: #fff;
            padding: 15px 10px;
            span {
                font-size: 12px;
            }
        }
        &_main {
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
        &_input {
            width: 160px;
        }
    }
</style>

