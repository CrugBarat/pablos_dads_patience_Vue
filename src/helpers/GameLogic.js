//OG Game Logic built for use in Terminal 

// let cards = [];
//
// for (i=4; i >0; i--) {
//   for(j=1; j<=13; j++){
//     cards.push(j)
//   }
// }
//
// let pablosDasPatience = () => {
//   let times = cards.length;
//   let playerCall = 1;
//   const maximumPlayerCall = 13;
//   let card = cards[Math.floor(Math.random() * 52)];
//   let index = cards.indexOf(card);
//   if (cards.length === 0)
//   {
//     console.log('YOU WON!');;
//   } else if (times > 0 && playerCall !== card ) {
//     playerCall > 13 ? playerCall = 1 : playerCall++
//     times--
//     cards.splice(index, 1);
//     pablosDasPatience()
//   } else {
//     console.log('YOU LOSE!');
//   }
// }
//
// pablosDasPatience()
// console.log(`Cards Matched: ${52 - cards.length}`);
// console.log(`Cards Remaining: ${cards.length}`);
