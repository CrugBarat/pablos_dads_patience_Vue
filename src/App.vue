<template lang="html">
  <div>
    <div class="title">
      <p>Kenny's Patience</p>
    </div>
    <div>
      <card-table></card-table>
    </div>
  </div>
</template>

<script>
import CardTable from './components/CardTable.vue'

export default {
  name: 'app',
  components: {
    'card-table': CardTable
  }
}
</script>

<style lang="css" scoped>
.title {
  font-family: 'blackjack';
  color: white;
  text-align: center;
  font-size: 8vw;
  opacity: 80%;
  color: black;
}

p {
  margin: 0;
  padding: 0;
}
</style>

<style>
body {
  background-image: url('assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

@font-face {
  font-family: 'blackjack';
  src: url('./assets/fonts/blackjack.otf');
}

</style>
