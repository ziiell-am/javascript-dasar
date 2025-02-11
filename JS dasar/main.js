// JAVASCRIPT DOM

// MEMBUAT ELEMEN BARU DI HTML (DI DIGITAL DOM)
const body = document.body;

body.append("Hello World"); //menambahkan teks ke body(append khusus body)

const h1 = document.createElement("h1"); //membuat elemen HTML
h1.innerHTML = "<marquee>Halo Traders</marquee>"; //menambahkan teks ke elemen HTML

const namaTraders = document.createElement("p"); //membuat elemen HTML
namaTraders.innerHTML = "<marquee>ZeeyFx</marquee>";

const namaTraders2 = document.createElement("p"); //membuat elemen HTML
namaTraders2.innerHTML = "<marquee>CryZee</marquee>";

body.append(h1); //menambahkan elemen HTML ke body
body.append(namaTraders); //menambahkan elemen HTML ke body
body.append(namaTraders2); //menambahkan elemen HTML ke body