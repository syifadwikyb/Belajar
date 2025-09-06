import { Thermometer, Settings, Lightbulb, Sprout, Heart } from 'lucide-react';
import React from 'react';

const innovationsData = [
  {
    id: 1,
    title: "Alat Pembakar Sampah Minim Asap",
    subtitle: "Teknologi Arduino Nano untuk Pengukuran Suhu",
    icon: <Thermometer className="w-8 h-8" />,
    image: "/assets/images/innovation-1.jpg",
    description: "Inovasi pembakaran sampah yang ramah lingkungan dengan monitoring suhu otomatis menggunakan Arduino Nano.",
    tutorial: [
      {
        step: 1,
        title: "Persiapan Alat dan Bahan",
        description: "Siapkan drum bekas, Arduino Nano, sensor suhu DS18B20, dan komponen elektronik lainnya.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 2,
        title: "Pemasangan Sensor",
        description: "Pasang sensor suhu pada posisi yang tepat di dalam drum pembakaran.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 3,
        title: "Programming Arduino",
        description: "Upload kode program untuk monitoring dan kontrol suhu otomatis.",
        image: "/assets/images/placeholder-300-200.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Paving Blok dari Sampah Plastik",
    subtitle: "Mengubah Limbah Menjadi Material Konstruksi",
    icon: <Settings className="w-8 h-8" />,
    image: "/assets/images/innovation-2.jpg",
    description: "Pembuatan paving blok berkualitas tinggi menggunakan sampah plastik sebagai bahan baku utama.",
    tutorial: [
      {
        step: 1,
        title: "Pengumpulan dan Sortir Plastik",
        description: "Kumpulkan berbagai jenis sampah plastik dan lakukan sortir berdasarkan jenisnya.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 2,
        title: "Proses Pencacahan",
        description: "Cacah plastik menjadi ukuran kecil menggunakan mesin pencacah.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 3,
        title: "Pencetakan Paving",
        description: "Campurkan plastik cacah dengan pasir dan cetak menggunakan cetakan paving.",
        image: "/assets/images/placeholder-300-200.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "Lilin Aromaterapi",
    subtitle: "Dari Limbah Rumah Tangga",
    icon: <Lightbulb className="w-8 h-8" />,
    image: "/assets/images/innovation-3.jpg",
    description: "Pembuatan lilin aromaterapi cantik dan harum dari limbah minyak jelantah dan sisa lilin.",
    tutorial: [
      {
        step: 1,
        title: "Persiapan Bahan",
        description: "Siapkan minyak jelantah yang sudah disaring, sumbu lilin, dan pewangi alami.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 2,
        title: "Proses Pencampuran",
        description: "Campurkan minyak jelantah dengan bahan pengeras dan pewangi sesuai takaran.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 3,
        title: "Pencetakan dan Finishing",
        description: "Tuang campuran ke dalam wadah dan biarkan mengeras.",
        image: "/assets/images/placeholder-300-200.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "Pupuk Organik",
    subtitle: "Kompos dari Sampah Organik",
    icon: <Sprout className="w-8 h-8" />,
    image: "/assets/images/innovation-4.jpg",
    description: "Pengolahan sampah organik menjadi pupuk kompos berkualitas untuk pertanian berkelanjutan.",
    tutorial: [
      {
        step: 1,
        title: "Pengumpulan Bahan Organik",
        description: "Kumpulkan sampah organik seperti sisa sayuran, daun kering, dan kotoran hewan.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 2,
        title: "Proses Pengomposan",
        description: "Tumpuk bahan organik dengan perbandingan yang tepat dan aduk secara berkala.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 3,
        title: "Pematangan dan Panen",
        description: "Tunggu proses dekomposisi selama 2-3 bulan hingga kompos matang dan siap digunakan.",
        image: "/assets/images/placeholder-300-200.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "Tanaman Obat Keluarga (TOGA)",
    subtitle: "Apotek Hidup di Halaman Rumah",
    icon: <Heart className="w-8 h-8" />,
    image: "/assets/images/innovation-5.jpg",
    description: "Program penanaman tanaman obat keluarga untuk kesehatan dan mengurangi sampah organik.",
    tutorial: [
      {
        step: 1,
        title: "Pemilihan Tanaman",
        description: "Pilih jenis tanaman obat yang sesuai dengan iklim dan kebutuhan keluarga.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 2,
        title: "Persiapan Media Tanam",
        description: "Siapkan media tanam menggunakan kompos dari sampah organik rumah tangga.",
        image: "/assets/images/placeholder-300-200.jpg"
      },
      {
        step: 3,
        title: "Perawatan dan Pemanfaatan",
        description: "Rawat tanaman dengan baik dan manfaatkan untuk pengobatan tradisional keluarga.",
        image: "/assets/images/placeholder-300-200.jpg"
      }
    ]
  }
];

export default innovationsData;