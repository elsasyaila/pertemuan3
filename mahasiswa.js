// Superclass Mahasiswa (tidak berubah)
class Mahasiswa {
    constructor(nama, nim, prodi, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.prodi = prodi;
        this.angkatan = angkatan;
        this._status = "Aktif"; // Property tambahan untuk status mahasiswa
    }

    // Polymorphic method: aktivitas
    aktivitas() {
        return "Melakukan aktivitas umum mahasiswa"; // Default method aktivitas
    }
}

// Kelas baru 1: MahasiswaBerprestasi
class MahasiswaBerprestasi extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan) {
        super(nama, nim, prodi, angkatan); // Memanggil constructor superclass Mahasiswa
        this._prestasi = []; // Menyimpan daftar prestasi (enkapsulasi)
    }

    // Getter dan Setter untuk prestasi (Enkapsulasi)
    getPrestasi() {
        return this._prestasi; // Mengambil daftar prestasi
    }

    tambahPrestasi(prestasi) {
        this._prestasi.push(prestasi); // Menambah prestasi ke dalam daftar
    }

    // Override polymorphic method
    aktivitas() {
        return "Mengikuti kompetisi dan mencapai prestasi"; // Aktivitas khusus untuk Mahasiswa Berprestasi
    }
}

// Kelas baru 2: MahasiswaPeneliti
class MahasiswaPeneliti extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan) {
        super(nama, nim, prodi, angkatan); // Memanggil constructor superclass Mahasiswa
        this._penelitian = null; // Menyimpan penelitian (enkapsulasi)
    }

    // Getter dan Setter untuk penelitian (Enkapsulasi)
    getPenelitian() {
        return this._penelitian; // Mengambil informasi penelitian
    }

    setPenelitian(penelitian) {
        this._penelitian = penelitian; // Menetapkan penelitian
    }

    // Override polymorphic method
    aktivitas() {
        return "Melakukan penelitian dan publikasi ilmiah"; // Aktivitas khusus untuk Mahasiswa Peneliti
    }
}

// Kelas baru 3: MahasiswaWirausaha
class MahasiswaWirausaha extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan) {
        super(nama, nim, prodi, angkatan); // Memanggil constructor superclass Mahasiswa
        this._usaha = null; // Menyimpan informasi usaha (enkapsulasi)
    }

    // Getter dan Setter untuk usaha (Enkapsulasi)
    getUsaha() {
        return this._usaha; // Mengambil informasi usaha
    }

    setUsaha(usaha) {
        this._usaha = usaha; // Menetapkan usaha
    }

    // Override polymorphic method
    aktivitas() {
        return "Menjalankan dan mengembangkan usaha"; // Aktivitas khusus untuk Mahasiswa Wirausaha
    }
}

// Kelas baru 4: MahasiswaAtlet
class MahasiswaAtlet extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan, cabangOlahraga) {
        super(nama, nim, prodi, angkatan); // Memanggil constructor superclass Mahasiswa
        this._cabangOlahraga = cabangOlahraga; // Menyimpan cabang olahraga (enkapsulasi)
        this._prestasiOlahraga = []; // Menyimpan prestasi olahraga (enkapsulasi)
    }

    // Getter dan Setter untuk cabang olahraga dan prestasi (Enkapsulasi)
    getCabangOlahraga() {
        return this._cabangOlahraga; // Mengambil cabang olahraga
    }

    getPrestasiOlahraga() {
        return this._prestasiOlahraga; // Mengambil daftar prestasi olahraga
    }

    tambahPrestasiOlahraga(prestasi) {
        this._prestasiOlahraga.push(prestasi); // Menambah prestasi olahraga
    }

    // Override polymorphic method
    aktivitas() {
        return `Berlatih dan berkompetisi dalam ${this._cabangOlahraga}`; // Aktivitas khusus untuk Mahasiswa Atlet
    }
}

// Kelas baru 5: MahasiswaInternasional
class MahasiswaInternasional extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan, negaraAsal) {
        super(nama, nim, prodi, angkatan); // Memanggil constructor superclass Mahasiswa
        this._negaraAsal = negaraAsal; // Menyimpan informasi negara asal (enkapsulasi)
        this._bahasaAsing = []; // Menyimpan daftar bahasa asing yang dikuasai (enkapsulasi)
    }

    // Getter dan Setter untuk negara asal dan bahasa asing (Enkapsulasi)
    getNegaraAsal() {
        return this._negaraAsal; // Mengambil negara asal
    }

    getBahasaAsing() {
        return this._bahasaAsing; // Mengambil daftar bahasa asing
    }

    tambahBahasaAsing(bahasa) {
        this._bahasaAsing.push(bahasa); // Menambah bahasa asing yang dikuasai
    }

    // Override polymorphic method
    aktivitas() {
        return "Belajar lintas budaya dan berpartisipasi dalam program pertukaran mahasiswa"; // Aktivitas khusus untuk Mahasiswa Internasional
    }
}

// Contoh penggunaan
const mahasiswaBerprestasi = new MahasiswaBerprestasi("Elsa Syaila Arzetti", "2301436", "Sistem Informasi Kelautan", 2023);
mahasiswaBerprestasi.tambahPrestasi("Juara 1 Lomba Karya Tulis Ilmiah"); // Menambah prestasi

const mahasiswaPeneliti = new MahasiswaPeneliti("Deswita Maharani", "2301002", "Sistem Informasi Kelautan", 2023);
mahasiswaPeneliti.setPenelitian("Analisis Dampak Perubahan Iklim terhadap Ekosistem Laut"); // Set penelitian

const mahasiswaWirausaha = new MahasiswaWirausaha("Rizka Azlia Yumna", "2301003", "Sistem Informasi Kelautan", 2023);
mahasiswaWirausaha.setUsaha("Startup Pengolahan Limbah Plastik Laut"); // Set usaha

const mahasiswaAtlet = new MahasiswaAtlet("Shofia Nabila", "2301004", "Sistem Informasi Kelautan", 2023, "Renang");
mahasiswaAtlet.tambahPrestasiOlahraga("Medali Emas Kejuaraan Renang Antar Universitas"); // Tambah prestasi olahraga

const mahasiswaInternasional = new MahasiswaInternasional("Aisyah Pasha Nurfilaily", "2301005", "Sistem Informasi Kelautan", 2023, "Jerman");
mahasiswaInternasional.tambahBahasaAsing("Inggris"); // Tambah bahasa asing
mahasiswaInternasional.tambahBahasaAsing("Jerman");

// Demonstrasi polimorfisme
const daftarMahasiswa = [mahasiswaBerprestasi, mahasiswaPeneliti, mahasiswaWirausaha, mahasiswaAtlet, mahasiswaInternasional];

daftarMahasiswa.forEach(mahasiswa => {
    console.log(`${mahasiswa.nama}: ${mahasiswa.aktivitas()}`); // Memanggil aktivitas sesuai dengan subclass masing-masing
});