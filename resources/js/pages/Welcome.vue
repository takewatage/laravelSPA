<template>
    <div>
       <div class="top-wrapper">
            <div class="container">
                <h1>LOVE THE LIFE YOU LIVE. <br>LIVE THE LIFE YOU LOVE.</h1>
                <p>Kodoはチームを活性化させる日報共有ツールです。<br>チームのみんなが自分らしく働くために、Kodoで毎日をシェアしましょう。</p>
            </div>
            <center>
                <a class="button is-primary is-inverted is-outlined login">Login</a>
                    <br>or<br>
                <a class="button is-primary is-inverted is-outlined">Sign up</a>
            </center>
        </div>
    </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.top-wrapper {
  padding: 150px 0 0 0;
  background-image: url("../../img/KeyVisual.jpg");
  background-size: cover;
  color: white;
  text-align: center;
}

.top-wrapper h1 {
  opacity: 0.7;
  font-size: 45px;
  letter-spacing: 5px;
}

.top-wrapper p {
  opacity: 0.7;
  font-size: 16px;
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
  .login {
    padding: 0 19px;
  }
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
</style>


