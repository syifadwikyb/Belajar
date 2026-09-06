class Kucing {
  bersuara() { console.log("Meong!"); }
}

class Anjing {
  bersuara() { console.log("Guk guk!"); }
}

// Kita bisa memasukkan objek apapun asalkan mereka punya fungsi bersuara()
function suruhBersuara(hewan) {
  hewan.bersuara(); 
}

const oyen = new Kucing();
const heli = new Anjing();

suruhBersuara(oyen); // Output: Meong!
suruhBersuara(heli); // Output: Guk guk!