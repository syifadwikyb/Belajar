class MesinKopi {
  #panaskanAir() { /* ...proses rumit memanaskan air... */ }
  #gilingBijiKopi() { /* ...proses rumit menggiling... */ }
  #ekstrakKopi() { /* ...proses rumit ekstraksi... */ }

  // Abstraksi: Pengguna hanya melihat dan memakai fungsi sederhana ini
  buatKopi() {
    this.#panaskanAir();
    this.#gilingBijiKopi();
    this.#ekstrakKopi();
    console.log("Kopi Anda sudah siap dinikmati! ☕");
  }
}

const baristaMachine = new MesinKopi();
// Sangat simpel kan penggunaannya? Semua kerumitan disembunyikan.
baristaMachine.buatKopi();