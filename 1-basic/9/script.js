// ============================================
// 1. Optional Chaining (?. ) Örneği
// ============================================

// Dolu bir kullanıcı objesi
const fullUser = {
    ad: "Ahmet",
    adres: {
        sehir: "İstanbul",
        ilce: "Kadıköy"
    }
};

// Eksik (bozuk) veri gelen kullanıcı objesi
const emptyUser = {
    ad: "Mehmet"
    // adres objesi YOK!
};

function sehirYazdir(kullanici, elementId) {
    // ESKİ YÖNTEM:
    // const sehir = (kullanici && kullanici.adres && kullanici.adres.sehir) ? kullanici.adres.sehir : 'Bulunamadı';

    // YENİ YÖNTEM (Optional Chaining):
    // Eğer 'adres' yoksa undefined döner ve durur. 'sehir'e erişmeye çalışıp hata patlatmaz.
    const sehir = kullanici?.adres?.sehir;
    
    return sehir;
}

console.log("Ahmet'in Şehri:", sehirYazdir(fullUser));  // İstanbul
console.log("Mehmet'in Şehri:", sehirYazdir(emptyUser)); // undefined

// HTML'e yazdırma
const chainingOutput = `
Ahmet (Dolu Obje): ${sehirYazdir(fullUser)} <br>
Mehmet (Eksik Obje): ${sehirYazdir(emptyUser)} (Hata vermedi, undefined döndü)
`;
document.getElementById('chaining-result').innerHTML = chainingOutput;


// ============================================
// 2. Nullish Coalescing (??) Örneği
// ============================================

const hizVerisi0 = 0;         // Kullanıcı hızı 0 girmiş (Geçerli bir değer)
const hizVerisiNull = null;   // Veri hiç gelmemiş (Bilinmiyor)
const hizVerisiBos = "";      // Boş string

// ESKİ YÖNTEM (OR Operatorü || )
// 0, false, "" gibi değerleri de "yok" sayardı!
const eskiHiz = hizVerisi0 || 100; // Sonuç 100 olur! (HATA: 0 hızı yok sayıldı)

// YENİ YÖNTEM (Nullish Coalescing ?? )
// Sadece null veya undefined ise sağ tarafı çalıştırır.
const yeniHiz = hizVerisi0 ?? 100; // Sonuç 0 olur (DOĞRU: 0 geçerli bir sayıdır)

const nullHiz = hizVerisiNull ?? 100; // Sonuç 100 (Çünkü sol taraf null)

console.log("Eski (||) ile 0 hızı:", eskiHiz);
console.log("Yeni (??) ile 0 hızı:", yeniHiz);

// HTML'e yazdırma
const nullishOutput = `
<b>Senaryo:</b> Bir arabanın hızı 0 km/s olabilir.<br><br>
Gelen Veri: <code>0</code><br>
Eski Yöntem ( || ): <b>${eskiHiz}</b> (Yanlış! 0'ı yok saydı)<br>
Yeni Yöntem ( ?? ): <b>${yeniHiz}</b> (Doğru! 0'ı kabul etti)<br>
<hr>
Gelen Veri: <code>null</code><br>
Yeni Yöntem ( ?? ): <b>${nullHiz}</b> (Varsayılan değeri atadı)
`;
document.getElementById('nullish-result').innerHTML = nullishOutput;
