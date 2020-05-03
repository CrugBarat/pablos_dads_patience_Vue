<template lang="html">
  <div>
    <div class="game-board" v-if="!gameRules">
      <div class="scores-container">
        <div class="scores">
          <div class="games"> <p>Games: {{this.games}}</p></div>
          <div class="high-score"> <p>High Score: {{this.highScore}}</p></div>
          <div class="games-won"> <p>Games Won: {{this.gamesWon}}</p></div>
        </div>
      </div>
      <div class="call-cr-container">
        <div class="call-cr">
          <div class="call"> <p>Player Call: {{this.playerCall}}</p></div>
          <div class="cards-remianing"> <p>Cards Remaining: {{this.cardsRemaining}}</p></div>
        </div>
      </div>
      <div class="cards-container">
        <div class="cards">
          <img class="card" :src="start ? getCard() : back">
        </div>
      </div>
    </div>
    <div class="button-container">
      <input v-if="gameRules" class="button" type="image" :src="returnButton" v-on:click="handleReturn">
      <input v-if="!gameRules" class="button" type="image" :src="button" @mousedown="handleClick" @mouseup="handleRelease">
      <input class="button" type="image" :src="rules" v-on:click="getGameRules">
    </div>
    <div>
      <game-rules v-if="gameRules"></game-rules>
    </div>
  </div>
</template>

<script>
import back from '@/assets/cards/back.png';
import button from '@/assets/button.png';
import rules from '@/assets/rules.png';
import returnButton from '@/assets/return.png';
import {CardsArray} from '@/config/CardsArray.js';
import {RestartArray} from '@/config/RestartArray.js';
import GameRules from './GameRules.vue';

export default {
  name: 'card-table',
  data() {
    return {
      'back': back,
      'button': button,
      'rules': rules,
      'returnButton': returnButton,
      'playerCall': 0,
      'cardsRemaining': 52,
      'start': null,
      'cardsArray': CardsArray,
      'restartArray': RestartArray,
      'card': null,
      'cardKey': null,
      'cardValue': null,
      'highScore': 0,
      'games': 0,
      'gamesWon': 0,
      'gameRules': null
    }
  },
  components: {
    'game-rules': GameRules
  },
  methods: {
    handleClick(){
      this.start = true;
      this.getCardObject();
      this.playerCallCap();
      this.decreaseCardsRemaining();
      this.removeCard();
    },
    handleRelease() {
      this.pablosDasPatience();
    },
    getGameRules(){
      this.gameRules = true;
    },
    handleReturn(){
      this.gameRules = null;
    },
    getCard() {
      return require('@/assets/cards/' + this.cardKey + '.png');
    },
    getCardObject() {
      this.card = this.cardsArray[this.randomCard(this.cardsRemaining)];
      this.cardKey = Object.keys(this.card);
      this.cardValue = Object.values(this.card)[0];
    },
    randomCard(num) {
      return Math.floor(Math.random() * (num));
    },
    checkLose() {
      if (this.playerCall === this.cardValue) {
        alert('YOU LOSE!');
        this.addHighScore();
        this.resetGame();
        this.games += 1;
      }
    },
    pablosDasPatience() {
      if (this.cardsRemaining === 0) {
        alert('YOU WON!');
        this.resetGame();
        this.gamesWon += 1;
        this.games += 1;
        this.highScore = 0;
      } else {
        this.checkLose();
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
      this.cardsArray.splice(index, 1);
    },
    resetGame() {
      this.playerCall = 0;
      this.cardsRemaining = 52;
      this.start = null;
      this.card = null;
      this.cardKey = null;
      this.cardValue = null;
      this.cardsArray = [...this.restartArray];
    },
    addHighScore() {
      let highScore = (52 - this.cardsRemaining);
      if (this.highScore < highScore) {
        this.highScore = highScore;
      }
    }
  }
}
</script>

<style lang="css" scoped>

.scores-container {
  display: block;
  text-align: center;
  margin-bottom: 20px;
}

.scores {
  display: inline-block;
  width: 60%;
}

.high-score {
  font-size:30px;
  width: 32%;
  float: left;
}

.games-won {
  font-size:30px;
  width: 32%;
  float: left;
}

.games {
  font-size:30px;
  width: 32%;
  float: left;
}

.call-cr-container {
  display: block;
  text-align: center;
  margin: 5px;
  margin-bottom: 20px;
}

.call-cr {
  display: inline-block;
  width: 45%;
}

.call {
  font-size:30px;
  float: left;
  margin-right: 3%;
  width: 45%;
}

.cards-remianing {
  font-size:30px;
  float: left;
  width: 45%;
}

.cards-container {
  display: block;
  text-align: center;
  margin-bottom: 30px;
}

.cards {
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
  margin-left: 15px;
  margin-right: 15px;
}

p {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  color: white;
}

input:focus {
  outline: none;
}
</style>
