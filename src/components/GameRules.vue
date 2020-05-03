<template lang="html">
  <div class="rules-container">
    <div class="rules">
      <div class="text">
        <h2>Rules</h2>
        <p>Player starts with a full deck of cards. They must turn over each card while calling out numbers from 1 to 13 in order. 1,2,3,4,5..... They must repeat this number sequence until all cards are turned.</p>
        <p>If the player's call matches the numerical value of the turned card - THEY LOSE!</p>
        <p>If the player successfully turns over every card - THEY WIN!</p>
        <ul class="list">
          <h4>Card Values</h4>
          <li>Ace : 1</li>
          <li>2..10 : 2..10</li>
          <li>Jack : 11</li>
          <li>Quenn : 12</li>
          <li>King : 13</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game-rules'
}
</script>

<style lang="css" scoped>
.rules-container {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: white;
  opacity: 80%;
}

.rules {
  display: inline-block;
  width: 80%;
}

.text {
  font-size:30px;
  width: 100%;
}

ul {
  list-style: none;
}

.list {
  padding-top: 10px;
}

</style>
