<template>
  <div id="app">
<AppHeader></AppHeader>
    <transition name="page" mode="out-in">
      <slot>
        <router-view></router-view>
      </slot>
    </transition>
  </div>
</template>

<script>
    import AppHeader from "./Organisms/AppHeader.vue";

    export default {
        el: '#app',

        mounted() {
            console.log('Component mounted.')
        },

        components: {
            AppHeader
        }
    }
</script>
