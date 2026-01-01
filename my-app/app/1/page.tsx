'use client'

import React, { useState } from 'react'

const Ders1 = () => {
    const [ad, setAd] = useState("Engin ")
    const [soyad, setSoyad] = useState("Hocam")


    let letAd = "Let Adi"
    let letSoyad = "Let Soyadi"



    console.log("rerendered")
    return (
        <div>
            <p>{ad}<br />{soyad}</p>
            <button onClick={() => setAd("Baska")} className='bg-red-500 cursor-pointer'>Adı Degistir</button>
            <button onClick={() => setSoyad("Isim")} className='bg-blue-500 cursor-pointer'>Soyadı Degistir</button>

            <p>{letAd}<br />{letSoyad}</p>
            <button onClick={() => letAd = "degisken"} className='bg-red-500 cursor-pointer'>Adı Degistir</button>
            <button onClick={() => letSoyad = "degisken"} className='bg-blue-500 cursor-pointer'>Soyadı Degistir</button>

            <br />
            <br />
            <input type="text" className='border border-gray-300' onChange={(e) => setAd(e.target.value)} />
        </div>
    )
}

export default Ders1