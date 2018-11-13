<template>
    <div>
        <app-header></app-header>
        <div class="top-wrapper">
            <div class="container">
                <h1>LOVE THE LIFE YOU LIVE. <br />LIVE THE LIFE YOU LOVE.</h1>
                <p>
                    Kodoはチームを活性化させる日報共有ツールです。
                    <br />チームのみんなが自分らしく働くために、Kodoで毎日をシェアしましょう。
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
            <p>
                ちょっとまっててね
            </p>
        </vs-popup>
    </div>
</template>

<script>
    import AppHeader from "../components/Organisms/AppHeader";

    export default {
        name: "welcome",

        data() {
            return {
                popupActivo: false
            };
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
