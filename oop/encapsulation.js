class RekeningBank {
  #saldo = 1000; // Data ini diproteksi (private), tidak bisa diakses langsung dari luar

  cekSaldo() {
    return this.#saldo;
  }
}

const rekeningSaya = new RekeningBank();

console.log(rekeningSaya.cekSaldo())
// console.log(rekeningSaya.#saldo) // ERROR! karena bersifat private