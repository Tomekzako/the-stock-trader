export const state = () => ({
    funds: 10000,
    stocks: []
})

export const getters = {
    stockPortfolio (state, getters, rootState) {
        return state.stocks.map(stock => {
            console.log(stock);
            const record = rootState.stocks.stocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
        return state.stocks;
    }
}

export const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find( el => el.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find( el => el.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record, 1));
        }
        state.funds += stockPrice * quantity;
    }
}

export const actions = {
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order);
    },
};