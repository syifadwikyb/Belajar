# Rest API dengan Node.js menggunakan WebStorm

## 📌 Pendahuluan
Proyek ini adalah REST API yang dikembangkan menggunakan Node.js dan Express, dengan tambahan beberapa package untuk validasi, hashing password, logging, database, serta unit testing. IDE yang direkomendasikan untuk pengembangan adalah **WebStorm**.

---

## 📦 Instalasi Paket yang Dibutuhkan

### 🔍 Validasi Input
Digunakan untuk memastikan data yang diterima sesuai dengan format yang diinginkan.
```sh
npm install joi
```

### 🌐 Framework Web
Digunakan untuk membangun API dengan cepat dan efisien.
```sh
npm install express
npm install --save-dev @types/express
```

### 🗄️ Database
Digunakan untuk mengelola dan berinteraksi dengan database.
```sh
npm install --save-dev prisma
```

### 📜 Logging
Digunakan untuk mencatat aktivitas sistem dan error yang terjadi.
```sh
npm install winston
```

### 🔐 Hashing Password
Digunakan untuk mengamankan data pengguna, seperti kata sandi.
```sh
npm install bcrypt
npm install --save-dev @types/bcrypt
```

### 🔑 UUID Generator
Digunakan untuk membuat identitas unik bagi setiap entitas.
```sh
npm install uuid
npm install --save-dev @types/uuid
```

### 🧪 Unit Testing
Digunakan untuk menguji endpoint API dan memastikan kinerjanya.
```sh
npm install --save-dev jest @types/jest
npm install --save-dev babel-jest @babel/preset-env
npm install --save-dev supertest @types/supertest
```

---

## ⚙ Konfigurasi **Babel**
Untuk menggunakan Jest dan transpile kode, tambahkan konfigurasi berikut:

1. **Tambahkan script testing di `package.json`**
```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}
```

2. **Buat file konfigurasi `babel.config.json`**
```json
{
  "presets": ["@babel/preset-env"]
}
```

---

## 🚀 Menjalankan API
Setelah semua package terinstal, jalankan server dengan perintah berikut:
```sh
node index.js
```
Atau gunakan **nodemon** agar server otomatis restart saat ada perubahan:
```sh
npx nodemon index.js
```

---

## ✅ Menjalankan Unit Test
Untuk menjalankan unit test menggunakan Jest dan Supertest:
```sh
npm test
```

---

## 🔗 Referensi
- [Babel Setup](https://babeljs.io/setup#installation)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Prisma Documentation](https://www.prisma.io/docs)

Semoga bermanfaat! 🚀

