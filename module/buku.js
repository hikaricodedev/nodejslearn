class Buku {
    constructor(id_buku = null , nama_buku = null){
        this.id_buku = id_buku;
        this.nama_buku = nama_buku
    }

    getNamaBuku(){
        return this.nama_buku;
    }

    setNamaBuku(nama_baru){
        this.nama_buku = nama_baru;
    }
    testConsole(){
        console.log(`Console tes ${this.nama_buku} ini id_buku ${this.nama_buku}`);
    }
    
    loopBuku(){
        var new_buku = this.nama_buku;

        for (var i = 0 ; i<10 ; i++){
            console.log('ini buku '+ new_buku + i);
        }
    }

}
module.exports = Buku