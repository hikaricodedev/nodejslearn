var a = "100";
var module_test = require('./module/test_module');
var Buku = require('./module/buku')
console.log(a);
var buku_baru = new Buku(1 , 'Buku saya');
console.log(module_test)
console.log(buku_baru)
buku_baru.testConsole();
buku_baru.loopBuku();