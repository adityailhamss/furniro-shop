# 🛍️ Furniro App (Vite + Supabase)

Proyek ini adalah aplikasi e-commerce berbasis **React** yang telah dimigrasi dari **Create React App (CRA)** ke **Vite** untuk performa yang lebih cepat. Aplikasi ini menggunakan **Supabase** untuk autentikasi pengguna dan pengelolaan data produk.

## ✨ Fitur

- 🔥 **Migrasi ke Vite**: Build lebih cepat dan ringan.
- 🛒 **Pengelolaan Produk**: Mengambil dan menampilkan data produk dari Supabase.
- 🔐 **Autentikasi Pengguna**: Login, register, dan logout menggunakan Supabase Auth.
- 📊 **Optimasi Kinerja**: Lebih ringan dengan Vite dan environment variables terpisah.

## 📦 Teknologi yang Digunakan

- [React](https://react.dev) – UI Framework
- [Vite](https://vitejs.dev) – Build Tool
- [Supabase](https://supabase.io) – Backend-as-a-Service (BaaS) untuk autentikasi dan database
- [Tailwind CSS](https://tailwindcss.com) – Styling

## 🚀 Instalasi dan Menjalankan Proyek

### Prasyarat
- Node.js >= 18.x

### 1. Clone Repository
```bash
git clone https://github.com/adityailhamss/furniro-shop.git
cd repo
```

### 2. Instal Dependensi
```bash
npm install
# atau
pnpm install
```

### 3. Konfigurasi Environment Variables
Buat file `.env` di root proyek dan tambahkan:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Menjalankan Aplikasi
```bash
npm run dev
```
Akses di: `http://localhost:5173`

## 📚 Struktur Proyek

```
.
├── public/            # Static assets
├── src/
│    ├── components/  # Reusable components
│    ├── pages/       # Route pages
│    ├── services/    # API calls (Supabase)
│    ├── App.jsx      # Root component
│    └── main.jsx     # Entry point
└── vite.config.js    # Vite configuration
```

## 📜 Skrip Penting

| Perintah          | Deskripsi                   |
|-------------------|-----------------------------|
| `npm run dev`     | Menjalankan development server |
| `npm run build`   | Build untuk production         |
| `npm run preview` | Pratinjau hasil build          |

## 📢 Kontribusi

Kontribusi sangat diterima! Ikuti langkah berikut:
1. Fork repository ini.
2. Buat branch baru (`git checkout -b feature/fitur-baru`).
3. Commit perubahan (`git commit -m "feat: tambahkan fitur baru"`).
4. Push branch (`git push origin feature/fitur-baru`).
5. Buat Pull Request.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

