<template lang="html">
  <div>
    <div class="scores-container">
      <div class="scores">
        <div class="call"> <p>Player Call: {{this.playerCall}}</p></div>
        <div class="cards-remianing"> <p>Cards Remining: {{this.cardsRemaining}}</p></div>
      </div>
    </div>
    <div class="cards-container">
    <div class="cards">
      <img class="card" :src="getCard()">
    </div>
    </div>
    <div class="button-container">
    <input class="button" type="image" :src="button" v-on:click="handleClick">
  </div>
  </div>
</template>

<script>
import back from '@/assets/cards/back.png'
import button from '@/assets/button.png'
import {CardsArray} from '@/config/CardsArray.js'

export default {
  name: 'card-table',
  data() {
    return {
      'back': back,
      'button': button,
      'playerCall': 1,
      'cardsRemaining': 52,
      'card': null,
      'cardsArray': CardsArray
    }
  },
  methods: {
    handleClick(){
      this.playerCall +=1;
      this.cardsRemaining -=1;
      this.removeCard()
    },
    getCard() {
      return require('@/assets/cards/' + this.cardsArray[this.randomCard(this.cardsRemaining)] + '.png');
    },
    removeCard() {
      const index = this.cardsArray.indexOf(this.getCard());
      this.cardsArray.splice(index, 1)
    },
    randomCard(num) {
      return Math.floor(Math.random() * (num))
    }
  }
}
</script>

<style lang="css" scoped>
.scores-container {
  border-style: solid;
  display: block;
  text-align: center;
}
.scores {
  display: inline-block;
}
.call {
  font-size:30px;
  float: left;
  margin-right: 3%;
}
.cards-remianing {
  font-size:30px;
  float: left;
}
.cards-container {
  border-style: solid;
  display: block;
  text-align: center;
}
.cards {
  border-style: solid;
  display: inline-block;
}
.card {
  height: 40vh;
}
.button-container {
  text-align: center;
}
.button {
  height: 60px;
  opacity: 80%;
}

p {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  color: white;
}
</style>
