// Sahte veritabanı isteği (Simülasyon)
function veritabanindanOku() {
    return new Promise((resolve, reject) => {
        console.log("Veri tabanına istek atıldı...");
        
        setTimeout(() => {
            resolve("Veri başarıyla geldi: { id: 1, ad: 'Ahmet' }");
        }, 2000); // 2 saniye bekle
    });
}

const sonucAlani = document.getElementById('result-area');

function ekranTemizle() {
    sonucAlani.textContent = "Yükleniyor...";
    sonucAlani.className = "loading";
}

function ekranaYaz(mesaj, tip = 'success') {
    sonucAlani.textContent = mesaj;
    sonucAlani.className = tip;
}

// ---------------------------------------------------------
// YÖNTEM 1: ES6 Promise (Eski Stil)
// ---------------------------------------------------------
function promiseIleGetir() {
    ekranTemizle();
    console.log("Promise yöntemi başladı");

    veritabanindanOku()
        .then((veri) => {
            console.log("Promise içinde veri geldi");
            ekranaYaz(veri);
        })
        .catch((hata) => {
            console.error(hata);
            ekranaYaz(hata, 'error');
        });
        
    console.log("Bu satır asenkron olduğu için beklemeden çalışır (Promise)");
}

// ---------------------------------------------------------
// YÖNTEM 2: ES2017 Async / Await (Modern Stil)
// ---------------------------------------------------------
// async keyword'ü fonksiyonun bir Promise döneceğini ve içinde await kullanılabileceğini belirtir.
async function asyncAwaitIleGetir() {
    ekranTemizle();
    console.log("Async/Await yöntemi başladı");

    try {
        // await keyword'ü Promise çözülene kadar bu satırda bekler!
        // Kod sanki senkron (satır satır) çalışıyormuş gibi görünür.
        const veri = await veritabanindanOku();
        
        console.log("Async/Await veri geldi");
        ekranaYaz(veri);
        
    } catch (hata) {
        // Hata yakalama işlemi try-catch bloğu ile yapılır
        console.error(hata);
        ekranaYaz(hata, 'error');
    }
}
