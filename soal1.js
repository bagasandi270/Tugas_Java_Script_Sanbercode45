const prompt = require('prompt-sync')({ sigint: true });


var angka = prompt("Masukkan Angka = ");

// cek jika bukan angka && angka >= 0 (tidak minus)
if (!isNaN(angka) && angka >= 0) {
  // cek apakah input bilangan genap, jika angka di modulus 2 == 0
  if (angka % 2 === 0) {
    console.log("Angka yang anda input adalah bilangan genap"); // adalah genap
    var hasil_akar = Math.sqrt(angka);
    console.log("Hasil akar kuadrat dari " + angka + " adalah " + hasil_akar);
  } else {
    console.log("Tidak bisa input bilangan ganjil"); // adalah ganjil
  }
} else { // jika hasil input salah
  console.log("Input salah atau tidak bisa input bilangan negatif.");
}