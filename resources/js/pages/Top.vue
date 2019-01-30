<template>
    <div>
        TOP dayo!!!!!!!
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { action, getter } from '~/store/types'
import User from '~/models/User.js'

export default {
    name: 'top',

    mounted () {
    },

    computed: {
        ...mapGetters({
            user: [getter.AUTH_USER],
        }),
    },

    async created () {
        await this[action.AUTH_FETCH_USER] ()
    },

    methods: {
        ...mapActions([
            action.AUTH_FETCH_USER
        ]),
    }
}
</script>


<style lang="scss" scoped>

</style>

