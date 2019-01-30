<template>
    <div class="app-layout">
        <app-header></app-header>

        <div class="app-content">
            <div class="loginBg">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '~/components/Organisms/AppHeader';

    export default {
        name: 'guest-layout',

        created () {
            console.log(this.$route.fullPath)
        },

        components: {
            AppHeader
        }
    }
</script>

<style lang="scss" scoped>
</style>
