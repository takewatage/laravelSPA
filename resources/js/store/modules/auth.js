import axios from 'axios'
import Cookies from 'js-cookie'
import { action, getter } from '../types'
import User from '~/models/User';
import moment from 'moment'

let ttl;
if (window.Laravel) {
     ttl = moment().add(window.Laravel.ttl, 'minutes').diff(moment(), 'days', true)
}

// state
export const state = {
    user:  new User({id :Cookies.get('user') || 0}),
    token: Cookies.get('token'),
    isLogin: false
}

// mutations
export const mutations = {
    [action.AUTH_SAVE_TOKEN] (state, { token }) {        
        state.token = token
        Cookies.set('token', token, { expires: ttl})
    },

    [action.AUTH_FETCH_USER] (state, { user }) {
        state.user = user
        Cookies.set('user', user.id, { expires: ttl})
    },

    [action.UPDATE_LOGIN_STATE] (state, status) {
        state.isLogin = status
    },

    [action.AUTH_LOGOUT] (state) {
        state.user = new User()
        state.token = null

        Cookies.remove('token')
        Cookies.remove('user')
    },
}

// actions
export const actions = {
    //トークン保存
     [action.AUTH_SAVE_TOKEN]({ commit, dispatch }, payload) {         
        commit(action.AUTH_SAVE_TOKEN, payload)
    },
    //ログインユーザー取得
    async [action.AUTH_FETCH_USER] ({ commit }) {
        const { data } = await axios.get('/api/getCurrentUser')
        console.log(data);
        commit(action.AUTH_FETCH_USER, { user: data })
    },
    //ログインステータス更新
    async [action.UPDATE_LOGIN_STATE] ({ commit }, state) {        
        commit(action.UPDATE_LOGIN_STATE, state)
    },
    //ログアウト
    async [action.AUTH_LOGOUT] ({ commit }) {
        await axios.post('/api/logout')        
        commit(action.AUTH_LOGOUT)
        commit(action.UPDATE_LOGIN_STATE, false)
    },

    [action.AUTH_CLEAR] ({ commit }) {
         commit(action.AUTH_LOGOUT)
    }
}

// getters
export const getters = {
    [getter.AUTH_USER]: state => state.user,
    [getter.AUTH_TOKEN]: state => state.token,
    [getter.AUTH_CHECK]: state => state.user.id,
    [getter.LOGIN_STATE]: state => state.isLogin
}