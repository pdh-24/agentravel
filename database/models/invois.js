import mongoose from 'mongoose';

const invoisSchema = new mongoose.Schema(
    {
        pembayaranId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pembayaran', required: true },
        nomorInvois: { type: String, required: true, unique: true },
        tanggalTerbit: { type: Date, default: Date.now },
    },
    {
        collection: "invois", // Nama koleksi tetap "invois"
        timestamps: true, // Menambahkan createdAt & updatedAt
    },
);

export default mongoose.models.invois || mongoose.model('invois', invoisSchema);