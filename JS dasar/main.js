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
        name: 'CryZee',
        age: 18,
        city: 'Padang',
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
];

dataTraders.map((values, index) => {
    console.log(values.name, values.age);
})