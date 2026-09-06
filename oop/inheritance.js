// Class Induk
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  makan() {
    console.log(`${this.nama} sedang makan.`);
  }
}

// Class Anak (Mewarisi dari Hewan)
class Burung extends Hewan {
  terbang() {
    console.log(`${this.nama} terbang ke angkasa!`); // 'nama' didapat dari induk
  }
}

const beo = new Burung("Rio");
beo.makan();   // Output: Rio sedang makan. (Kemampuan warisan)
beo.terbang(); // Output: Rio terbang ke angkasa! (Kemampuan sendiri)