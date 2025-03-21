import mongoose from 'mongoose';

const logTransaksiSchema = new mongoose.Schema(
    {
        tipe: { type: String, required: true },
        deskripsi: { type: String, required: true },
        waktu: { type: Date, default: Date.now },
    }, 
    {
        collection: "log-transaksi", // Nama koleksi tetap "log-transaksi"
        timestamps: true, // Menambahkan createdAt & updatedAt
    },
);
export default mongoose.models['log-transaksi'] || mongoose.model('log-transaksi', logTransaksiSchema);