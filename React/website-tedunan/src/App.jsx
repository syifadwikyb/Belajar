import React, { useState, useEffect } from 'react';

// --- ICONS (Inline SVG for simplicity) ---
const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

// --- Google Fonts Loader ---
const GoogleFont = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  return null;
};

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#masalah', text: 'Masalah Sampah' },
    { href: '#solusi', text: 'Inovasi Kita' },
    { href: '#toga', text: 'Apotek Hidup' },
    { href: '#aksi', text: 'Ayo Bergerak' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-green-800 tracking-wider">
            <LeafIcon /> Tedunan <span className="text-green-600">Asri</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">{link.text}</a>
            ))}
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-green-800">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-6 py-3 text-center text-gray-700 hover:bg-green-100 transition duration-300">{link.text}</a>
          ))}
        </div>
      )}
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => (
  <section id="beranda" className="min-h-screen flex items-center bg-gradient-to-b from-green-50 to-green-200">
    <div className="container mx-auto px-6 text-center">
      <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4 leading-tight">
          Portal Inovasi <span className="text-green-600">Warga Tedunan</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Solusi Mandiri untuk Lingkungan Bersih dan Masyarakat Sehat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div className="bg-green-50/50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Visi Kami</h3>
            <p className="text-gray-600 text-sm">Menjadikan Desa Tedunan sebagai contoh desa mandiri dalam pengelolaan sampah dan pemanfaatan sumber daya alam.</p>
          </div>
          <div className="bg-green-50/50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Misi Kami</h3>
            <p className="text-gray-600 text-sm">Mendidik, menggerakkan, dan memberdayakan masyarakat melalui inovasi yang mudah diterapkan.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Masalah Sampah Section ---
const MasalahSampah = () => {
  const impacts = [
    { title: 'Dampak Kesehatan', description: 'Tumpukan sampah menjadi sarang lalat, nyamuk demam berdarah, dan bakteri penyebab penyakit diare atau kulit.', icon: '❤️' },
    { title: 'Dampak Lingkungan', description: 'Pencemaran tanah dan air, serta bau tidak sedap yang mengganggu kenyamanan dan merusak keindahan desa.', icon: '🌿' },
    { title: 'Dampak Sosial', description: 'Lingkungan yang terlihat kumuh dapat menurunkan semangat warga dan citra positif desa kita.', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <section id="masalah" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Mengapa Sampah Jadi Masalah Serius?</h2>
          <p className="text-gray-600 mt-2">Memahami dampak sampah adalah langkah pertama untuk peduli.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map(impact => (
            <div key={impact.title} className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-green-600 text-4xl mb-4">{impact.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-green-800">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
        {/* Iklan Layanan Masyarakat */}
        <div className="mt-16 bg-green-800 text-white text-center p-8 rounded-2xl max-w-4xl mx-auto shadow-lg">
          <h3 className="font-bold text-2xl text-green-300 mb-2">"Pesan Peduli Lingkungan dari Tedunan"</h3>
          <p className="text-green-100 italic text-lg">"Sebuah plastik yang kita buang hari ini, akan tetap ada hingga puluhan tahun mendatang. Mari bijak kelola sampah demi masa depan anak cucu kita. Kebersihan desa adalah cerminan warganya."</p>
        </div>
      </div>
    </section>
  );
};

// --- Solusi & Inovasi Section ---
const SolusiInovasi = () => (
  <section id="solusi" className="py-20 bg-green-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">Solusi & Inovasi Tedunan</h2>
        <p className="text-gray-600 mt-2">Karya nyata dari warga, untuk warga.</p>
      </div>

      {/* Alat Pembakar Sampah */}
      <div className="bg-white p-8 rounded-2xl mb-12 shadow-lg">
        <h3 className="text-2xl font-bold text-green-800 mb-4">🔥 Inovasi Unggulan: Insinerator Sampah Minim Asap</h3>
        <p className="text-gray-600 mb-6">Solusi untuk sampah anorganik yang sulit didaur ulang, mengurangi asap beracun dari pembakaran terbuka dan mengubah sampah menjadi abu yang lebih sedikit.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-xl mb-3 text-green-900">Panduan Pembuatan & Pengukuran Suhu</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Alat & Bahan:</span> Siapkan drum bekas, pipa besi, bor, alat las, dan engsel.</li>
              <li><span className="font-medium text-gray-800">Perakitan:</span> Buat lubang udara di bawah, pintu di tengah, dan pasang cerobong asap.</li>
              <li><span className="font-medium text-gray-800">Suhu Ideal:</span> Jaga suhu di atas 600°C untuk pembakaran sempurna. Cirinya adalah api membara oranye terang.</li>
              <li><span className="font-medium text-gray-800">Keamanan:</span> Letakkan alat di tempat yang aman, jauh dari bahan mudah terbakar.</li>
            </ol>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-xl mb-3 text-green-900">Tips Penggunaan</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Masukkan sampah kering terlebih dahulu untuk memancing api.</li>
              <li>Jangan memasukkan sampah basah dalam jumlah banyak sekaligus.</li>
              <li>Pastikan ada aliran udara yang cukup dari lubang bawah.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pupuk Kompos */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-green-800 mb-4">♻️ Dari Sampah Organik Menjadi Pupuk (Tangan)</h3>
        <p className="text-gray-600 mb-6">Mengubah sampah dapur dan kebun menjadi nutrisi berharga untuk menyuburkan tanah pekarangan kita.</p>
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {['Siapkan Wadah', 'Bahan Hijau', 'Bahan Coklat', 'Susun & Jaga', 'Tanda Matang'].map((step, index) => (
            <li key={step} className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="text-3xl text-green-600 font-bold mb-2">{index + 1}</div>
              <h4 className="font-semibold text-green-800">{step}</h4>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

// --- TOGA Section ---
const TogaSection = () => {
  const plants = [
    { name: 'Jahe', benefit: 'Meredakan batuk dan masuk angin.', color: 'yellow' },
    { name: 'Kunyit', benefit: 'Anti-peradangan dan bumbu masak.', color: 'orange' },
    { name: 'Lidah Buaya', benefit: 'Perawatan luka ringan & rambut.', color: 'lime' },
    { name: 'Kencur', benefit: 'Mengobati batuk & nafsu makan.', color: 'purple' }
  ];

  return (
    <section id="toga" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Apotek Hidup di Pekarangan Kita</h2>
          <p className="text-gray-600 mt-2">Manfaatkan lahan sekitar rumah untuk kemandirian kesehatan keluarga.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {plants.map(plant => (
            <div key={plant.name} className="bg-gray-50 p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img src={`https://placehold.co/200x200/${plant.color}-500/ffffff?text=${plant.name.replace(' ', '+')}`} alt={plant.name} className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 border-${plant.color}-500`} />
              <h3 className={`font-bold text-xl text-${plant.color}-600`}>{plant.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{plant.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Kreasi Lilin Section ---
const KreasiLilin = () => (
  <section id="kreasi" className="py-20 bg-green-50">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <img src="https://placehold.co/600x400/f472b6/ffffff?text=Kreasi+Lilin" alt="Kreasi Lilin Aromaterapi" className="rounded-2xl shadow-2xl w-full" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">Dari Limbah Menjadi Berkah</h2>
        <h3 className="text-2xl font-semibold text-pink-500 mb-4">Kreasi Lilin Aromaterapi</h3>
        <p className="text-gray-600 mb-6">Memanfaatkan minyak jelantah yang sudah disaring untuk membuat produk bernilai jual. Ini adalah cara kreatif mengurangi limbah sekaligus membuka peluang usaha kecil bagi ibu-ibu dan pemuda desa.</p>
        <button className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 shadow-lg hover:shadow-xl">
          Info Pelatihan & Pemesanan
        </button>
      </div>
    </div>
  </section>
);

// --- Aksi Section ---
const AksiSection = () => (
  <section id="aksi" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900">Kontribusi Anda Sangat Berarti!</h2>
      <p className="text-gray-600 mt-2 mb-8 max-w-2xl mx-auto">Mari bergabung dalam kegiatan positif untuk membangun Desa Tedunan yang lebih baik. Bersama kita bisa!</p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="font-bold text-xl text-green-800 mb-3">🗓️ Jadwal Kegiatan</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Gotong Royong:</strong> Setiap hari Minggu pertama, Pukul 07.00 WIB.</li>
            <li><strong>Pelatihan Kompos:</strong> Setiap Sabtu minggu kedua, Pukul 15.00 WIB di Balai Desa.</li>
            <li><strong>Demo Insinerator:</strong> Diumumkan di grup warga.</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="font-bold text-xl text-green-800 mb-3">📞 Narahubung</h3>
          <p className="text-gray-700">Untuk informasi lebih lanjut mengenai kegiatan atau ingin bergabung, silakan hubungi:</p>
          <p className="font-semibold text-green-900 mt-2">Bapak Fulan - 0812-3456-7890</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-green-800 border-t border-green-700">
    <div className="container mx-auto px-6 py-6 text-center text-green-200">
      <p>&copy; {new Date().getFullYear()} Tedunan Asri. Dibuat dengan semangat gotong royong oleh warga Desa Tedunan.</p>
    </div>
  </footer>
);


// --- Main App Component ---
export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white">
      <GoogleFont />
      <Header />
      <main>
        <HeroSection />
        <MasalahSampah />
        <SolusiInovasi />
        <TogaSection />
        <KreasiLilin />
        <AksiSection />
      </main>
      <Footer />
    </div>
  );
}
