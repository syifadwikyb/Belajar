import React from 'react';
import { BookOpen } from 'lucide-react';

const EducationSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Edukasi Lingkungan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari cara mengelola sampah dengan benar dan berkontribusi untuk lingkungan yang lebih bersih
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tips Mengurangi Sampah</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Reduce (Kurangi)</h3>
                  <p className="text-gray-600">Kurangi penggunaan barang sekali pakai dan pilih produk yang tahan lama.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Reuse (Gunakan Kembali)</h3>
                  <p className="text-gray-600">Manfaatkan barang bekas untuk fungsi lain sebelum membuangnya.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Recycle (Daur Ulang)</h3>
                  <p className="text-gray-600">Pilah sampah dan olah menjadi produk baru yang bermanfaat.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <img
              src="/assets/images/education-image.jpg"
              alt="Edukasi Lingkungan"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Yuk, Mulai dari Rumah!</h3>
            <p className="text-gray-600">
              Setiap tindakan kecil di rumah dapat memberikan dampak besar bagi lingkungan.
              Mari mulai dengan memilah sampah dan mengurangi penggunaan plastik sekali pakai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;