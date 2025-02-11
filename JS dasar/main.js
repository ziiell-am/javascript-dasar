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

// filter mapping data array & sort data array
dataTraders
.sort((a, b) => b.age - a.age)
.filter((x) => x.age >= 20)
.map((values) => console.log(values));

/* JAVASCRIPT ARRAY DONE */