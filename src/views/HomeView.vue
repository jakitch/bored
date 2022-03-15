<template>
<div class="wrapper">
  <typewriter class="bored-type"
    :replace="replace"
    :type-replace="100"
    :replace-interval="1250">
    Bored?
  </typewriter>
  <div class="button" v-on:click="switchToRandomPage">Click Me</div>
  <h2>Number of buttons clicked: <br>{{numButtonsClicked}}</h2>
</div>
</template>

<script>
import Typewriter from "typewriter-vue"
export default {
  name:'HomeView',
  components: {
    Typewriter,
  },
  data: () => ({
    replace: [
      {
      from: "Bored?",
      to: "Click below!",
      }
    ]
  }),
  methods: {
    switchToRandomPage() {
      this.$root.$data.numButtonsClicked++;
      if (Math.random() < 0.5)
        this.$router.push('/quiz')
      else
        this.$router.push('/kanye')
    },
  },
  computed: {
    numButtonsClicked() {
      return this.$root.$data.numButtonsClicked;
    },
    title() {
      return "wut?"
    },
  },
}
</script>

<style scoped>
.wrapper{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bored-type {
   user-select: none;
  font-size: 140px;
  padding: 10px;
}

.wrapper h2 {
  padding: 20px;
  font-size: 25px;
}

.button {
  user-select: none;
  cursor: pointer;
  font-size: 30px;
  background-color: black;
  border-radius: 10px;
  border: 3px solid white; 
  padding: 0.3em;
  width: 200px;
  margin: 0 auto 25px auto;
  color: white;
}

.button:hover {
    background-color: gray;
}

.button:active {
    background-color: black;
}

@media (max-width: 450px) {

  .bored-type {
    font-size: 50px;
    margin-bottom: 25px;
  }

  .button:hover {
        background-color: black;
  }

  .button:active {
    background-color: gray;
  }
}
</style>
