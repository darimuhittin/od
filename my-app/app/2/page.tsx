import React from 'react'


const topla = (a: number, b: number) => {
    return a + b
}

const topla2 = (a: number, b: number) => a + b


const page = () => {
    return (
        <>
            <div>

                <div>Merhaba 2. bolum</div>
                <p>{topla(1, 2)}</p>
                <p>{topla2(1, 2)}</p>

            </div>
        </>
    )
}

export default page