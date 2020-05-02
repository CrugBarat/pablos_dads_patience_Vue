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
      <img class="card" :src="start ? getCard() : back">
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
import {RestartArray} from '@/config/RestartArray.js'

export default {
  name: 'card-table',
  data() {
    return {
      'back': back,
      'button': button,
      'playerCall': 1,
      'cardsRemaining': 52,
      'start': null,
      'cardsArray': CardsArray,
      'restartArray': RestartArray,
      'card': null,
      'cardKey': null,
      'cardValue': null
    }
  },
  methods: {
    handleClick(){
      this.start = true,
      this.getCardObject(),
      this.getCardKey(),
      this.getCardValue(),
      this.pablosDasPatience()
    },
    getCard() {
      return require('@/assets/cards/' + this.cardKey + '.png');
    },
    getCardObject() {
      this.card = this.cardsArray[this.randomCard(this.cardsRemaining)]
    },
    getCardKey() {
      this.cardKey = Object.keys(this.card)
    },
    getCardValue() {
      this.cardValue = Object.values(this.card)[0]
    },
    randomCard(num) {
      return Math.floor(Math.random() * (num))
    },
    pablosDasPatience() {
      if (this.cardsRemaining === 0)
      {
        alert('YOU WON!');
      } else if (this.cardsRemaining > 0 && this.playerCall !== this.cardValue) {
        this.playerCallCap()
        this.decreaseCardsRemaining()
        this.removeCard()
      } else {
        alert('YOU LOSE!');
        this.playerCall = 1;
        this.cardsRemaining = 52;
        this.start = null;
        this.card = null;
        this.cardKey = null;
        this.cardValue = null;
        this.cardsArray = [...this.restartArray];
      }
    },
    playerCallCap() {
      this.playerCall >= 13 ? this.playerCall = 1 : this.playerCall++
    },
    decreaseCardsRemaining() {
      this.cardsRemaining -= 1;
    },
    removeCard() {
      const index = this.cardsArray.indexOf(this.getCard());
      this.cardsArray.splice(index, 1)
    },
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
