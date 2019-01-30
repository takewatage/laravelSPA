<template>
    <div class="wrapper skin-blue">

        <app-header></app-header>

        <div class="content-wrapper">
            <transition name='page' mode="out-in">
                <router-view :key="$route.fullPath"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

    import AppHeader from '~/components/Organisms/AppHeader';

    export default {
        name: 'app',

        created () {
        },

        components: {
            AppHeader
        },
    }
</script>

<style lang="scss" scoped>
</style>
