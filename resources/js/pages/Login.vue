<template>
    <div class="wrapper">
        <div class="section page-header header-filter" :style="headerStyle">
          <div class="container">
            POPOPOPOPO!!!LOGIN
            <a class="button">Button</a>
            <a class="button is-primary">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {}
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(../img/profile_city.jpg)`
      }
    }
  }
}
</script>
