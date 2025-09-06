import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Desa Hijau</span>
            </div>
            <p className="text-green-200">
              Bersama membangun desa yang bersih, sehat, dan berkelanjutan untuk generasi masa depan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2 text-green-200">
              <p>📍 Desa Tedunan, Indonesia</p>
              <p>📞 (021) 123-4567</p>
              <p>✉️ info@desahijau.id</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosial Media</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-sm font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Desa Hijau. Dibuat dengan ❤️ untuk lingkungan yang lebih bersih.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;