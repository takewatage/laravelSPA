<template>

    <div id="app">

        <loading ref="loading"></loading>

        <comment v-if="layout" :is="layout"></comment>

    </div>
</template>

<script>
    import Loading from './Loading.vue'

    // Load layout components dynamically.
    const requireContext = require.context('../pages/layouts', false, /.*\.vue$/)

    const layouts = requireContext.keys()
        .map(file =>
            [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
        )
        .reduce((components, [name, component]) => {
            components[name] = component
            return components
        }, {})

    export default {
        el: '#app',

        metaInfo () {
            const { appName } = window.config

            return {
                title: appName,
                titleTemplate: `%s · ${appName}`,
            }
        },

        data() {
            return {
                pathGroup: null,
                layout: null,
                defaultLayout: 'app',
            }
        },

        computed: {
        },

        watch: {
            $route ($new) {
                this.pathGroup = $new.meta.group
            }
        },

        created () {
        },

        mounted () {
            this.$loading = this.$refs.loading
        },

        methods: {
            /**
             * Set the application layout.
             *
             * @param {String} layout
             */
            setLayout (layout) {
                if (!layout || !layouts[layout]) {
                    layout = this.defaultLayout
                }

                this.layout = layouts[layout]
            },
        },

        beforeDestroy () {
        },

        components: {
            Loading,
        },

        mixins: [
        ]
    }
</script>
