import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import User from "./modules/User.js";

export default new Vuex.Store({
    modules: { User }
});