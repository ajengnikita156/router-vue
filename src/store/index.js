import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0,
    },
    getters: {
        getCounter: (state) => {
            return state.count;
        },
    },
    mutations: {
        increment(state){
            state.count++;
        },
        decrement(state){
            if (state.count > 0){
                state.count--;
            }
        },
    },
});


export default store;