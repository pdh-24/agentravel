import mongoose from 'mongoose';

const laporanSchema = new mongoose.Schema(
    {
        periode: { type: String, required: true },
        totalTransaksi: { type: Number, required: true },
        totalPendapatan: { type: Number, required: true },
    },
    {
        collection: "laporan", // Nama koleksi tetap "laporan"
        timestamps: true, // Menambahkan createdAt & updatedAt
    },
);
export default mongoose.models.laporan || mongoose.model('laporan', laporanSchema);