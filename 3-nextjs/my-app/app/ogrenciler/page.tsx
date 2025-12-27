import React from 'react'
import OgrenciKarti from '@/components/OgrenciKarti'
const Ogrenciler = () => {
    return (
        <div>
            <div>Ogrenciler</div>
            <OgrenciKarti ad="Hakan" not={20} />
            <OgrenciKarti ad="Dari" not={80} />
            <OgrenciKarti ad="Ahmet" not={70} />
        </div>
    )
}

export default Ogrenciler