import * as types from "../mutation-types.js";
//初始化状态
const state = {
    logState: 'none',
    userName: "",
    loginTime: '',
};

const mutation = {
    [types.USER_LOGIN](state) {
        state.logState = "login";
    },
    [types.SET_USERINFO](state, userName) {
        state.userName = uinfo.userName;
        state.loginTime = new Date();
    }
}
const actions = {
    login({ commit, state }, userName) {
        commit(types.USER_LOGIN);
        commit(types.SET_USERINFO, userName);
    }
}