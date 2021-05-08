import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 as number | null,
    name: null as string | null,
  },
  getters: {
    getName(state, getters) {
      return state.name;
      // (parameter) state: {
      //   count: number | null;
      //   name: string;
      // }
    },
    greet(state, getters) {
      // return `My name is ${getters.getName.toUpperCase()}`;
      // 実装と異なるアンチパターンのインラインアサーション
      return `My name is ${(getters.getName as string).toUpperCase()}`;

    }
  },
  mutations: {
    setName(state, payload: string) { // アンチパターンのダウンキャスト
      state.name = payload // (property) name: string | null
      // (parameter) state: {
      //   count: number | null;
      //   name: string;
      // }
    },
    increment(state) {
      // state.count++;
    }
  },
  actions: {
    asyncSetName(ctx, payload) {
      ctx.commit('setName', { name: payload })// payloadのスキーマ間違い
      console.log(ctx.state.name);
      // (parameter) ctx: ActionContext<{
      //   count: number | null;
      //   name: string | null;
      // }, {
      //   count: number | null;
      //   name: string | null;
      // }>
      // var state: {
      //   count: number | null;
      //   name: string;
      // }
    },
    asyncIncrement(ctx) {
      ctx.commit('increrment');
      console.log(ctx.state.count);
    },
    async countup(ctx) {
      while (true) {
        await (() => new Promise(resolve => {
          setTimeout(resolve, 1000);
        }))()
        ctx.dispatch('increment'); // 存在しないAction Type
      }
    }
  }
})
