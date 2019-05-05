import stocks from '../data/stocks';

export const state = () => ({
    stocks: []  
})

export const getters = {
    getStocks: state => {
        return state.stocks;
    }
}

export const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
    }
}

export const actions = {
    buyStock: ({commit}, order) => {
        commit('portfolio/BUY_STOCK', order, {root: true});
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};