// Dışarıya sadece istediklerimizi açıyoruz (export)
export const piSayisi = 3.14;

export function topla(a, b) {
  return a + b;
}

// Bu fonksiyon dışarı açılmadı, sadece bu dosyaya özel (Private gibi)
function gizliHesaplama() {
  return "Bunu dışarıdan kimse göremez";
}