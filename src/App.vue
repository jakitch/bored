<template>
<div class="wrapper">
  <div class="home">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"><div v-on:click="incrementClicks">Bored?</div></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link  class="nav-item nav-link active" to="/quiz"><div v-on:click="incrementClicks">Death Quiz</div></router-link>
        <router-link  class="nav-item nav-link active" to="/kanye"><div v-on:click="incrementClicks">Kanye Quotes</div></router-link>
        <div class="nav-item nav-link active" v-on:click="incrementClicks">Clicks: {{clicks}}</div>
      </div>
    </div>
  </nav>
  <router-view class="view-content"/>
  <footer id="foot"><a v-on:click="incrementClicks" class="git-link" href="https://github.com/jakitch/Mars"><img src='/images/gitlight.png'></a></footer>
</div>
</div>
</template>


<script>
export default {
  methods: {
    incrementClicks() {
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
.navbar {
  background-color: black !important;
}
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
    background-color:black;/*#ffffff00;*/ 
    text-align: center;
    height: 55px;
    flex-shrink: 0;
}
.view-content{
     flex: 1 0 auto;
}
</style>
