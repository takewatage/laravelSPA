<template>
    <div>
        <app-header></app-header>
        <div class="top-wrapper">
            <div class="container">
                <h1>LOVE THE LIFE YOU LIVE. <br />LIVE THE LIFE YOU LOVE.</h1>
                <p>
                    testtesttesttesttest
                    <br />testtesttesttest
                </p>
            </div>
            <center>
                <vs-button
                    color="#00c4a7"
                    text-color="#fff"
                    size="large"
                    type="border"
                    style="font-size: 1.25rem;
                    padding: 9px 24px;"
                    @click="popupActivo=true"
                    >Login</vs-button
                >

                <br />or<br />

                <router-link to="/login" class="button is-primary is-inverted is-outlined is-medium">Sign up</router-link>
            </center>
        </div>

        <vs-popup class="holamundo"  title="ろぐいん" :active.sync="popupActivo">
            <p v-show="isError">認証に失敗しました。</p>
            <form @submit.prevent="login">
                <vs-input label="Email" placeholder="email" v-model="user.email"/>
                <vs-input type="password" label="Password" placeholder="password" v-model="user.password"/>
                <vs-button color="primary" type="filled">ログイン</vs-button>
            </form>
        </vs-popup>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { action, getter } from '~/store/types'
    import User from '~/models/User.js'
    // import {HasError} from 'vform'

    import AppHeader from "~/components/Organisms/AppHeader";

    export default {
        name: "welcome",

        data() {
            return {
                popupActivo: false,
                user: new User(),
                busy: false,
                isError: false
            };
        },

        methods: {
            ...mapActions([
                action.AUTH_SAVE_TOKEN,
                action.AUTH_FETCH_USER,
                action.UPDATE_LOGIN_STATE
            ]),

            async login () {
                this.isError = false
                try {
                    const {data: {access_token}} = await this.user.post('/api/login')

                    if (!access_token) {
                        this.isError = true
                        return
                    }

                    this[action.AUTH_SAVE_TOKEN]({
                        token: access_token,
                    })

                    await this[action.AUTH_FETCH_USER]()
                    this[action.UPDATE_LOGIN_STATE](true)

                    await this.$nextTick()
                    location.reload()

                } catch(e) {
                    this.isError = true
                    throw new Error(e)

                } finally {
                }
            }
        },

        components: {
            AppHeader
        }
    };
</script>

<style lang="scss" scoped>
    .popo {
        color: #00c4a7;
    }
    .top-wrapper {
        padding: 150px 0 0 0;
        background-image: url("../../img/KeyVisual.jpg");
        background-size: cover;
        color: white;
        text-align: center;
    }

    .top-wrapper h1 {
        opacity: 1;
        font-size: 45px;
        letter-spacing: 5px;
        margin-bottom: 37px;
    }

    .top-wrapper p {
        opacity: 0.7;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .container {
        width: 100%;
        padding: 0 15px;
        margin: 0 auto;
    }

    .container p {
        padding: 30px 0 0px 0;
    }

    center {
        padding: 30px 0 60px 0;
    }

    .content-wrapper {
        padding: 0.5em 1em;
        margin-top: 5px;
        background: white;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    }
    .content-wrapper p {
        margin: 0;
        padding: 0;
    }

    .contribute {
        margin-top: 20px;
    }
    .vs-button--text {
        font-size: 22px;
    }
</style>
