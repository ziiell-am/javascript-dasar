// tugas kecil

/*
    tugas 1: prompt untuk mengetahui saldo akhir yang diinputkan oleh user
    tugas 2: menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

// let hari = new Date().getDay();
// alert(`hari ini adalah ${hari}`);

// tugas 1
const saldoAwal = Number(prompt('masukkan saldo awal?'));
const saldoTambahan = Number(prompt('dapet tambahan piro?'));
const hutang = Number(prompt('ono hutang piro?'));

const saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(`total harusnya ${saldoAkhir}`);

// tugas 2