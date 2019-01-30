<template>
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item"> <i class="fa fa-home"></i> Home </a>
            <a class="navbar-item"> <i class="fa fa-leaf"></i> 草 </a>
            <a class="navbar-item"> <i class="fa fa-user-circle"></i> Member </a>
        </div>
        <div class="navbar-center"><TitleLogo></TitleLogo></div>
        <div class="navbar-end">
            <div class="navbar-item">
                <vs-button color="#00c4a7" 
                type="filled"
                style="margin-right: 20px;">Signup</vs-button>
                <vs-button color="white" text-color="black" type="filled">Login</vs-button>
                <vs-button color="primary" type="filled" @click="logout">Log Out</vs-button>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleLogo from "../Atoms/TitleLogo";
    import { mapActions } from 'vuex'
    import { action } from '~/store/types'

    export default {
        name: "header-navi",

        data() {
            return {};
        },

        props: {},

        mounted() {},

        methods: {
            ...mapActions([
                action.AUTH_LOGOUT,
            ]),

            async logout () {
                await this[action.AUTH_LOGOUT] ()
                await this.$nextTick()

                location.reload()
            }
        },

        components: {
            TitleLogo
        }
    };
</script>

<style lang="scss" scoped></style>
