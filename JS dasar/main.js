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
const pairAing = [ 'GBPUSD', 'GBPJPY', 'EURJPY', 'AUDUSD', 'USDJPY', 'AUDJPY', 'XAUUSD']

const uj = pairAing.includes('USDJPY');

if (uj) {
    const posisiUj = pairAing.indexOf('USDJPY');
    const indexBefore= posisiUj - 1;
    const indexAfter = posisiUj + 1;
    const beforeUj = pairAing[indexBefore];
    const afterUj = pairAing[indexAfter];
    console.log(`Pair sebelum USDJPY adalah ${beforeUj}`);
    console.log(`Pair setelah USDJPY adalah ${afterUj}`);
    const pairAwal = pairAing.shift();
    console.log(`Pair awal adalah ${pairAwal}`);
    const pairAkhir = pairAing.pop();
    console.log(`Pair akhir adalah ${pairAkhir}`);
} else {
    console.log('USDJPY tidak ada');
}