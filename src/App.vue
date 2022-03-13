<template>
<div class="wrapper">
  <div class="home">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/" v-on:click="incrementClicks">Bored?</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a v-on:click="incrementClicks" class="nav-item nav-link active" href="embark"><div class = "nav-text">Death Quiz</div></a>
        <router-link v-on:click="incrementClicks" class="nav-item nav-link active" to="/kanye">Kayne Quotes</router-link>
        <div class="nav-item nav-link active" v-on:click="incrementClicks">Clicks: {{clicks}}</div>
      </div>
    </div>
  </nav>
  <router-view class="view-content"/>
  <footer><a v-on:click="incrementClicks" class="git-link" href="https://github.com/jakitch/Mars"><img src='/images/gitlight.png'></a></footer>
</div>
</div>
</template>


<script>
export default {
  methods: {
    incrementClicks() {
      console.log("yo");
      this.$root.$data.numButtonsClicked++
    }
  },
  computed: {
    clicks() {
      return this.$root.$data.numButtonsClicked;
    }
  }
}
</script>

<style>
.nav-item{
  user-select: none;
  cursor: pointer;
}

.nav-item:active, .navbar-brand:active{

  color: yellow !important;
}

.home{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: lightblue;
    color: black;
    margin: 0px;
    font-family: 'Merriweather', serif;
}
footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#ffffff00; 
    text-align: center;
    height: 55px;
    flex-shrink: 0;
}
.view-content{
     flex: 1 0 auto;
}
</style>
