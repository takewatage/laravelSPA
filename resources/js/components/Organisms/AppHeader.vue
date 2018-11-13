<template>
    <div id="header" :class="{top: isTop}">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container" style="height: 100%;">
                <humburger-menu></humburger-menu>
                <header-navi></header-navi>
            </div>
        </nav>
    </div>
</template>

<script>
    import HeaderNavi from "../Molecules/HeaderNavi";
    import HumburgerMenu from "../Molecules/HumburgerMenu";

    export default {
        name: "app-header",
        data() {
            return {
                scrollY: 0,
                isTop: true
            };
        },

        mounted() {
            //スクロール位置取得
            window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize)
        },

        methods: {
            handleScroll() {
                if(window.innerWidth > 1088){
                    this.scrollY = window.scrollY                    
                    this.isTop = (this.scrollY == 0) ? true: false
                }else {
                    this.isTop = false
                }             
            },
            handleResize() {
                if(window.innerWidth > 1088){
                    this.isTop = true
                } else {
                    this.isTop = false

                }        
            }
        },

        components: {
            HeaderNavi,
            HumburgerMenu
        }
    };
</script>
