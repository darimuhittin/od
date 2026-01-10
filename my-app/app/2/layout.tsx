import React from 'react'

interface Props {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default layout