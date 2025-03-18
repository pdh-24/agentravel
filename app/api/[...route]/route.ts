import { Hono } from 'hono';

export const runtime = 'node'; // Sesuaikan dengan environment
const app = new Hono();

// Rute-rute API antara Next.js (frontend) dan Hono (backend)
app.get('/hello', (c) => c.json({ message: 'Hello from Hono!' }));

/* -------------- MANAJEMEN PENGGUNA -------------- */
app.get("/pengguna", async c => {
    console.log("Mengambil data semua pengguna");
    // Query dan lain-lain
});
app.post("/pengguna", async c => {
    console.log("Menambah data pengguna baru");
    // Query dan lain-lain
});
app.put("/pengguna/:id", async c => {
    console.log("Memperbarui data pengguna menurut id");
    // Query dan lain-lain
});
app.delete("/pengguna/:id", async c => {
    console.log("Menghapus data pengguna menurut id");
    // Query dan lain-lain
});

/* -------------- MANAJEMEN CUSTOMER -------------- */
app.get("/customer", async c => {
    console.log("Mengambil data semua customer");
    // Query dan lain-lain
});
app.post("/customer", async c => {
    console.log("Menambah data customer baru");
    // Query dan lain-lain
});
app.get("/customer/:id", async c => {
    console.log("Mengambil data customer menurut id");
    // Query dan lain-lain
});
app.put("/customer/:id", async c => {
    console.log("Memperbarui data customer menurut id");
    // Query dan lain-lain
});
app.delete("/customer/:id", async c => {
    console.log("Menghapus data customer menurut id");
    // Query dan lain-lain
});

/* -------------- MANAJEMEN RESERVASI -------------- */
app.get("/reservasi", async c => {
    console.log("Mengambil data semua reservasi");
    // Query dan lain-lain
});
app.post("/reservasi", async c => {
    console.log("Menambahkan data reservasi baru");
    // Query dan lain-lain
});
app.get("/reservasi/:id", async c => {
    console.log("Mengambil detail reservasi menurut id");
    // Query dan lain-lain
});
app.put("/reservasi/:id", async c => {
    console.log("Memperbarui data reservasi menurut id");
    // Query dan lain-lain
});
app.delete("/reservasi/:id", async c => {
    console.log("Menghapus reservasi menurut id");
    // Query dan lain-lain
});

/* -------------- MANAJEMEN PEMBAYARAN -------------- */
app.put("/pembayaran", async c => {
    console.log("Membuat pembayaran");
    // Query dan lain-lain
});
app.post("/pembayaran/:id", async c => {
    console.log("Memperbarui data pembayaran menurut id");
    // Query dan lain-lain
});

/* -------------- MANAJEMEN INVOIS -------------- */
app.post("/invois", async c => {
    console.log("Membuat dan mengirim invois");
    // Query dan lain-lain
});
app.get("/invois/:id", async c => {
    console.log("Mendapatkan detail invois menurut id");
    // Query dan lain-lain
});

/* ---------- MANAJEMEN RIWAYAT TRANSAKSI ---------- */
app.get("/log-transaksi", async c => {
    console.log("Mendapatkan daftar log transaksi");
    // Query dan lain-lain
});
app.get("/log-transaksi/:id", async c => {
    console.log("Mendapatkan detail log transaksi menurut id");
    // Query dan lain-lain
});

/* -------------- MANAJEMEN LAPORAN -------------- */
app.get("/laporan", async c => {
    console.log("Mendapatkan laporan");
    // Query dan lain-lain
});

// Menangani request dari Next.js
export default async function handler(req: Request) {
  return app.fetch(req);
}
