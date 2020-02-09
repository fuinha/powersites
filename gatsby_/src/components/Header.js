import React, { useEffect, useState } from 'react'

const Header = () => {

    // execut only one after 1 sec
    const [contador, setContador] = useState(0)

    useEffect(() => {

        setInterval(() => {
           setContador(valorAntigo => valorAntigo + 1)
        }, 1000);

    }, [])

    return (
        <div>
            <h1>Ola Power 1.0 - Contador: {contador}</h1>
        </div>
    )

}

export default Header