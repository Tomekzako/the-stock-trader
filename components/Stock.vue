<template>
    <el-col :span="8">
        <el-card class="card" :body-style="{ padding: '0' }">
            <div class="card_header">
                <h3 class="card_name">NAME <span>(Price: Price)</span></h3>
            </div>
            <div class="card_main">
                <el-input size="medium" placeholder="Quantity" class="card_input"></el-input>
                <el-button type="primary" round>Buy</el-button>  
            </div>
        </el-card>
    </el-col>   
</template>

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

