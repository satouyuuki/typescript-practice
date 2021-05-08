import { Getters, Actions, Mutations } from "./types";
import { State, IGetters, IMutations, IActions } from "./counterType";

const state: State = {
  count: 0
}

const getters: Getters<State, IGetters> = {
  double(state, getters) { // 方アノテーションを付与しなくても良い
    return state.count * 2;
  },
  expo2(state, getters) {
    return state.count ** 2;
  },
  expo(state, getters) {
    return amount => state.count ** amount;
  }
  /**
   * Before
   */
  // double(state: State) { // 方アノテーションを付与
  //   return state.count * 2;
  // },
  // expo2(state: State) {
  //   return state.count ** 2;
  // },
  // expo(state: State) {
  //   return amount => state.count ** amount;
  // }
}

const mutations: Mutations<State, IMutations> = {
  setCount(state, payload) {
    state.count = payload.amount;
  },
  multi(state, payload) {
    state.count = state.count * payload;
  },
  increment(state) {
    state.count++;
  }
}
const actions: Actions<State, IActions, IGetters, IMutations> = {
  // S, A, G = {}, M = {}, RS = {}, RG = {}
  asyncSetCount(ctx, payload) {
    ctx.commit('setCount', { amount: payload.amount })
  },
  asyncMulti(ctx, payload) {
    ctx.commit('multi', payload);
  },
  asyncIncrement(ctx) {
    ctx.commit('increment');
  }
};