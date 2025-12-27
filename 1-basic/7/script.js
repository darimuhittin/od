// Değişken tanımlama
const isim = "Ali";

// Eski Yöntem: String Birleştirme
const eskiMesaj = "Merhaba " + isim + " nasılsın?";
console.log("Eski Yöntem:", eskiMesaj);

// Yeni Yöntem (ES6): Template Literals
const yeniMesaj = `Merhaba ${isim} nasılsın?`;
console.log("Yeni Yöntem:", yeniMesaj);

// Sonuçları HTML sayfasına yazdırma
document.getElementById('old-result').textContent = eskiMesaj;
document.getElementById('new-result').textContent = yeniMesaj;

// Ekstra Örnekler (Console'da görülebilir)
const urun = "Laptop";
const fiyat = 15000;

// Çok satırlı string örneği
const cokSatirli = `
Ürün Detayı:
-----------
Ürün: ${urun}
Fiyat: ${fiyat} TL
Durum: Stokta
`;

console.log(cokSatirli);
