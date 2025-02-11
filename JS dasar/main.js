//   for loop

// while loop
// let i = 0;
// while (i < 10){
// i++;
// console.log('ZeeyFx');
// }

// do while loop
// do {
// i++;
// console.log('ZeeyFx');
// } while (i < 10);
// 

// ARRAY JS PT 2
const pairAing = ['AUDUSD', 'AUDJPY', 'EURUSD'] //MERGE ARRAY
const pairManeh = ['EURJPY', 'USDJPY', 'GBPUSD']

const mergedPair = pairAing.concat(pairManeh)

// mapping array
for (list in mergedPair) {
  console.log(list)
}

//mapping array value dan index nya
mergedPair.map((value, index) => console.log(index, value))