import React from 'react'

interface Props {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <div>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </div>
    )
}

export default layout