import React from 'react'
import OgrenciKarti from '@/components/OgrenciKarti'

const OgrencilerPage = () => {
    return (
        <div>
            <OgrenciKarti ad="Ahmet" not={80} />
            <OgrenciKarti ad="Ayşe" not={70} />
            <OgrenciKarti ad="Ali" not={60} />
            <OgrenciKarti ad="Fatima" not={50} />
            <OgrenciKarti ad="Ahmet" not={40} />
            <OgrenciKarti ad="Ayşe" not={30} />
            <OgrenciKarti ad="Ali" not={20} />
            <OgrenciKarti ad="Fatima" not={10} />
            <OgrenciKarti ad="Ahmet" not={0} />
        </div>
    )
}

export default OgrencilerPage