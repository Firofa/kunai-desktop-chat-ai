# 🌟 Kunai - Desktop Chat AI 🌟

Kunai adalah aplikasi desktop chat AI yang menggunakan **model Ollama** untuk memberikan pengalaman chat yang cerdas dan responsif. Dengan Kunai, Anda bisa menyesuaikan model AI sesuai kebutuhan dan menjalankannya langsung di PC!

---

## 🚀 Fitur Utama

- 💬 **Chat AI** dengan model Ollama
- 🔧 **Kustomisasi Model** sesuai preferensi
- 💻 **Aplikasi Desktop** yang ringan dan mudah digunakan

---

## 🛠️ Persyaratan Sistem

- **Node.js** versi 16 atau lebih baru
- **NPM** versi 7 atau lebih baru
- **Ollama** terinstal di PC

---

## ⚙️ Cara Menjalankan Model Ollama di PC

1. **Download dan Install Ollama**  
   Ikuti instruksi resmi di: [https://ollama.com/download](https://ollama.com/download)

2. **Jalankan Model Ollama**  
   Buka terminal dan jalankan perintah berikut:

   ```bash
   ollama start
   ```

3. **Pastikan Model Berjalan**  
   Cek apakah model sudah aktif dengan:
   ```bash
   ollama status
   ```

---

## 🔧 Sesuaikan Model di `index.js`

Sesuaikan model AI dengan mengedit bagian berikut di `index.js`:

```js
const ollama = require("ollama");

const model = ollama.createModel({
  name: "nama-model-anda",
  version: "1.0.0",
});
```

> Ganti `nama-model-anda` dengan model Ollama yang ingin digunakan.

---

## 📦 Instalasi Dependensi

Pastikan semua dependensi up-to-date dengan menjalankan:

```bash
npm update
```

---

## ▶️ Menjalankan Aplikasi

Setelah instalasi selesai, jalankan aplikasi dengan:

```bash
npm start
```

---

## 📦 Build Aplikasi

Untuk membangun aplikasi desktop, gunakan:

```bash
npm run build
```

File hasil build akan tersedia di folder `dist`.

---

## 📚 Dokumentasi Tambahan

- [Panduan Model Ollama](https://ollama.com/docs)
- [Electron.js Documentation](https://www.electronjs.org/docs)

---

## 📧 Dukungan dan Kontribusi

Jika menemui masalah atau ingin berkontribusi, jangan ragu untuk membuat **issue** atau **pull request** di repository ini.

---

## 🏷️ Lisensi

Aplikasi ini dilisensikan di bawah **Creative Commons Attribution (CC BY)**.  
Anda diperbolehkan untuk menggunakan, memodifikasi, dan mendistribusikan aplikasi ini dengan syarat harus memberikan atribusi yang sesuai kepada pembuat aslinya.  
Harap cantumkan kredit kepada pembuat dengan menyertakan nama dan tautan ke repository asli.
