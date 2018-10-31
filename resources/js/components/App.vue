<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <slot>
        <router-view></router-view>
      </slot>
    </transition>
  </div>
</template>

<script>
    export default {
        el: '#app',

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
