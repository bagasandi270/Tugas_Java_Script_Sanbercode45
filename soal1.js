const prompt = require('prompt-sync')({ sigint: true });


var angka = prompt("masukkan angka = ");

// cek, jika bukan angka && angka >= 0 (tidak minus)
if (!isNaN(angka) && angka >= 0) {
  // cek inputan bilangan genap, jika angka di modulus 2 == 0
  if (angka % 2 === 0) {
    console.log("Angka yang anda input adalah bilangan genap"); // maka genap
    var hasil_akar = Math.sqrt(angka);
    console.log("Hasil akar kuadrat dari " + angka + " adalah " + hasil_akar);
  } else {
    console.log("Tidak bisa input bilangan ganjil"); // maka ganjil
  }
} else { // jika inputan salah
  console.log("Input salah atau tidak bisa input bilangan negatif.");
}