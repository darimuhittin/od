// 1. Immutability (Değişmezlik) - Verinin orijinal hali korunur.
// React'te state'i doğrudan değiştirmemeniz gerektiği için bu çok önemlidir.

const numbers = [1, 2, 3, 4, 5];
console.log("Orijinal Dizi:", numbers);

// ---------------------------------------------------------
// 2. .map() - Dönüştürme
// React'te listeleri render ederken en çok kullanılan metottur.
// Her elemanı alır, işlemden geçirir ve YENİ bir dizi oluşturur.
const squared = numbers.map((num) => num * num);
console.log("\n.map() ile karesi alınanlar:", squared);
// C++'çı notu: for(int i=0; i<n; i++) { newArr[i] = arr[i] * arr[i] } yerine geçer.

// ---------------------------------------------------------
// 3. .filter() - Süzme
// Belirli bir koşulu sağlayan elemanları seçip YENİ bir dizi oluşturur.
// React'te listeden eleman silerken (silinecek olanı filtreleyip atarak) çok kullanılır.
const evens = numbers.filter((num) => num % 2 === 0);
console.log("\n.filter() ile çift sayılar:", evens);

// ---------------------------------------------------------
// 4. .reduce() - İndirgeme / Toplulaştırma
// Diziyi tek bir değere (sayı, obje, dizi vb.) dönüştürür.
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log("\n.reduce() ile toplam:", sum);

// ---------------------------------------------------------
// 5. Arama ve Kontrol Metotları (.find, .some, .every)

// .find(): Koşulu sağlayan İLK elemanı döner (yoksa undefined).
const found = numbers.find((num) => num > 3);
console.log("\n.find() ile 3'ten büyük ilk sayı:", found);

// .some(): Dizi içinde koşulu sağlayan EN AZ BİR eleman var mı? (Boolean döner)
const hasLargeNumber = numbers.some((num) => num > 10);
console.log("\n.some() ile 10'dan büyük sayı var mı?:", hasLargeNumber);

// .every(): Dizideki TÜM elemanlar koşulu sağlıyor mu? (Boolean döner)
const allPositive = numbers.every((num) => num > 0);
console.log("\n.every() ile hepsi pozitif mi?:", allPositive);

// ---------------------------------------------------------
// SONUÇ: Orijinal dizi değişti mi? HAYIR.
console.log("\nKontrol: Orijinal Dizi Hala Aynı mı?:", numbers);


// Spread operator
const newNumbers = [...numbers,333];
console.log("\nSpread operator ile yeni dizi:", newNumbers);

interface User {
    id: number;
    name: string;
    role?: string;
}

const adminHakan : User = {
    id: 1,
    name: "Hakan",
    role: "admin"
}

const adminDari : User = {
    ...adminHakan,
    name: "Dari",
}
