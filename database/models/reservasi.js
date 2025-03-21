import mongoose from 'mongoose';

const reservasiSchema = new mongoose.Schema(
    {
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
        tanggal: { type: Date, required: true },
        layanan: { type: String, required: true },
        status: { type: String, required: true },
    },
    {
        collection: "reservasi", // Nama koleksi tetap "reservasi"
        timestamps: true, // Menambahkan createdAt & updatedAt
    },
);
export default mongoose.models.reservasi || mongoose.model('reservasi', reservasiSchema);