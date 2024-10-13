class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this._nama = nama;
        this._jenis = jenis;
        this._panjang = panjang;
        this._lebar = lebar;
    }

    get nama() { return this._nama; }
    get jenis() { return this._jenis; }
    get panjang() { return this._panjang; }
    get lebar() { return this._lebar; }

    infoKapal() {
        return `Kapal ${this._nama} merupakan jenis ${this._jenis} yang berukuran ${this._panjang} X ${this._lebar} m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this._kapasitasPenumpang = kapasitasPenumpang;
    }

    get kapasitasPenumpang() { return this._kapasitasPenumpang; }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this._kapasitasPenumpang} orang.`;
    }
}

class TiketKapal extends Kapal {
    constructor(nama, jenis, panjang, lebar, hargaTiket) {
        super(nama, jenis, panjang, lebar);
        this._hargaTiket = hargaTiket;
        this._tiketTerjual = 0;
    }

    get hargaTiket() { return this._hargaTiket; }
    get tiketTerjual() { return this._tiketTerjual; }

    jualTiket(jumlah) {
        this._tiketTerjual += jumlah;
        return `${jumlah} tiket terjual untuk kapal ${this._nama}.`;
    }

    infoTiket() {
        return `Harga tiket untuk kapal ${this._nama} adalah Rp${this._hargaTiket}.`;
    }

    totalPendapatan() {
        return this._tiketTerjual * this._hargaTiket;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, panjang, lebar);
        this._kapasitasMuatan = kapasitasMuatan;
        this._muatanSaatIni = 0;
    }

    get kapasitasMuatan() { return this._kapasitasMuatan; }
    get muatanSaatIni() { return this._muatanSaatIni; }

    tambahMuatan(berat) {
        if (this._muatanSaatIni + berat <= this._kapasitasMuatan) {
            this._muatanSaatIni += berat;
            return `Muatan seberat ${berat} ton berhasil ditambahkan.`;
        } else {
            return `Kapasitas tidak cukup. Sisa kapasitas: ${this._kapasitasMuatan - this._muatanSaatIni} ton.`;
        }
    }

    kurangiMuatan(berat) {
        if (this._muatanSaatIni - berat >= 0) {
            this._muatanSaatIni -= berat;
            return `Muatan seberat ${berat} ton berhasil diturunkan.`;
        } else {
            return `Tidak dapat mengurangi muatan melebihi muatan yang ada.`;
        }
    }

    infoMuatan() {
        return `Kapal ${this._nama} memiliki muatan ${this._muatanSaatIni} ton dari kapasitas total ${this._kapasitasMuatan} ton.`;
    }
}

// Kelas baru: KapalTanker
class KapalTanker extends KapalKargo {
    constructor(nama, panjang, lebar, kapasitasMuatan, jenisMuatan) {
        super(nama, "Tanker", panjang, lebar, kapasitasMuatan);
        this._jenisMuatan = jenisMuatan;
    }

    get jenisMuatan() { return this._jenisMuatan; }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini mengangkut ${this._jenisMuatan}.`;
    }
}

// Kelas baru: KapalSelam
class KapalSelam extends Kapal {
    constructor(nama, panjang, lebar, kedalaman) {
        super(nama, "Kapal Selam", panjang, lebar);
        this._kedalaman = kedalaman;
        this._sedangMenyelam = false;
    }

    get kedalaman() { return this._kedalaman; }
    get sedangMenyelam() { return this._sedangMenyelam; }

    menyelam() {
        if (!this._sedangMenyelam) {
            this._sedangMenyelam = true;
            return `${this._nama} sedang menyelam.`;
        }
        return `${this._nama} sudah dalam posisi menyelam.`;
    }

    muncul() {
        if (this._sedangMenyelam) {
            this._sedangMenyelam = false;
            return `${this._nama} telah muncul ke permukaan.`;
        }
        return `${this._nama} sudah berada di permukaan.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam hingga kedalaman ${this._kedalaman} meter.`;
    }
}

// Kelas baru: KapalPesiar
class KapalPesiar extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, jumlahDek) {
        super(nama, "Pesiar", panjang, lebar, kapasitasPenumpang);
        this._jumlahDek = jumlahDek;
        this._fasilitasHiburan = [];
    }

    get jumlahDek() { return this._jumlahDek; }
    get fasilitasHiburan() { return this._fasilitasHiburan; }

    tambahFasilitasHiburan(fasilitas) {
        this._fasilitasHiburan.push(fasilitas);
        return `Fasilitas ${fasilitas} telah ditambahkan ke ${this._nama}.`;
    }

    infoKapal() {
        let info = `${super.infoKapal()} Kapal ini memiliki ${this._jumlahDek} dek.`;
        if (this._fasilitasHiburan.length > 0) {
            info += ` Fasilitas hiburan: ${this._fasilitasHiburan.join(", ")}.`;
        }
        return info;
    }
}

// Kelas baru: PelayananKapal
class PelayananKapal {
    constructor() {
        this._kapal = [];
    }

    tambahKapal(kapal) {
        this._kapal.push(kapal);
        return `${kapal.nama} telah ditambahkan ke daftar pelayanan.`;
    }

    infoSemuaKapal() {
        return this._kapal.map(kapal => kapal.infoKapal()).join("\n");
    }
}

// Contoh penggunaan
const pelayanan = new PelayananKapal();

const kapalFerry = new KapalPenumpang("Titanic", "Ferry", 200, 100, 600);
console.log(pelayanan.tambahKapal(kapalFerry));

const tiketKapalPesiar = new TiketKapal("Pesiar Mewah", "Pesiar", 300, 50, 1000000);
console.log(tiketKapalPesiar.infoTiket());
console.log(tiketKapalPesiar.jualTiket(50));
console.log(`Total pendapatan: Rp${tiketKapalPesiar.totalPendapatan()}`);
console.log(pelayanan.tambahKapal(tiketKapalPesiar));

const kapalBarang = new KapalKargo("Kargo Kontainer", "Kargo", 250, 80, 10000);
console.log(kapalBarang.tambahMuatan(5000));
console.log(kapalBarang.infoMuatan());
console.log(kapalBarang.kurangiMuatan(2000));
console.log(kapalBarang.infoMuatan());
console.log(pelayanan.tambahKapal(kapalBarang));

const kapalTanker = new KapalTanker(" Very Large Gas Carrier", 300, 60, 50000, "minyak mentah");
console.log(kapalTanker.tambahMuatan(30000));
console.log(kapalTanker.infoKapal());
console.log(pelayanan.tambahKapal(kapalTanker));

const kapalSelam = new KapalSelam("Kapal Nanggala-402", 100, 20, 500);
console.log(kapalSelam.menyelam());
console.log(kapalSelam.muncul());
console.log(kapalSelam.infoKapal());
console.log(pelayanan.tambahKapal(kapalSelam));

const kapalPesiar = new KapalPesiar("TitanicKapal Dharma Kencana VII", 350, 70, 3000, 15);
console.log(kapalPesiar.tambahFasilitasHiburan("Kolam Renang"));
console.log(kapalPesiar.tambahFasilitasHiburan("Kasino"));
console.log(kapalPesiar.infoKapal());
console.log(pelayanan.tambahKapal(kapalPesiar));

console.log("\nInformasi Semua Kapal:");
console.log(pelayanan.infoSemuaKapal());