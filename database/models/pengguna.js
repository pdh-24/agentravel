import mongoose from 'mongoose';
import dbConnect from '@/database/connection/mongodb';

await dbConnect(); // Pastikan koneksi dilakukan dulu

const penggunaSchema = new mongoose.Schema(
    {
        nama: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }, 
    {
        collection: "pengguna", // Nama koleksi tetap "pengguna"
        timestamps: true, // Menambahkan createdAt & updatedAt
    },
);

export default mongoose.models.pengguna || mongoose.model('pengguna', penggunaSchema);