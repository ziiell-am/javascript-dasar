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
// mapping data array
const dataTraders = [
    {
        name: 'ZeeyFx',
        age: 17,
        city: 'Malang',
    },
    {
        name: 'ZiChain',
        age: 20,
        city: 'Jakarta',
    },
    {
        name: 'ZyPrcs',
        age: 28,
        city: 'Surabaya',
    },
    {
        name: 'CryZee',
        age: 18,
        city: 'Padang',
    },
];

// mapping data array sesuai urutan usia
dataTraders.sort((a, b) => a.age - b.age).map((values) => console.log(values));