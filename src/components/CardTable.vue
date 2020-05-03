<template lang="html">
  <div>
    <div class="high-score-container">
      <div class="high-score">
        <div class="score"> <p>High Score: {{this.highScore}}</p></div>
      </div>
    </div>
    <div class="call-cr-container">
      <div class="call-cr">
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
      <input class="button" type="image" :src="button" @mousedown="handleClick" @mouseup="handleRelease">
    </div>
  </div>
</template>

<script>
import back from '@/assets/cards/back.png';
import button from '@/assets/button.png';
import {CardsArray} from '@/config/CardsArray.js';
import {RestartArray} from '@/config/RestartArray.js';

export default {
  name: 'card-table',
  data() {
    return {
      'back': back,
      'button': button,
      'playerCall': 0,
      'cardsRemaining': 52,
      'start': null,
      'cardsArray': CardsArray,
      'restartArray': RestartArray,
      'card': null,
      'cardKey': null,
      'cardValue': null,
      'highScore': 0
    }
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
      }
    },
    pablosDasPatience() {
      if (this.cardsRemaining === 0) {
        alert('YOU WON!');
        this.addHighScore();
        this.resetGame();
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

.high-score-container {
  display: block;
  text-align: center;
  margin-bottom: 20px;
}

.high-score{
  display: inline-block;
}

.score {
  font-size:30px;
}

.call-cr-container {
  display: block;
  text-align: center;
  margin: 5px;
  margin-bottom: 20px;
}

.call-cr {
  display: inline-block;
  width: 40%;
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
