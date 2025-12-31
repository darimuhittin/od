// app/page.tsx
export default function Home() {
  const isim = "Hocam";
  const tarih = new Date().getFullYear();

  return (
    <div>
       {/* Burası HTML gibi görünür */}
       <h1>Merhaba, {isim}</h1> 

       {/* Burası JS dünyası */}
       <p>Yıl: {tarih}</p> 
    </div>
  );
}