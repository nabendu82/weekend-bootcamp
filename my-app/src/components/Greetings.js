import React from 'react'

const Greetings = (props) => {
    const { name, children } = props
    
    return (
        <>
            <h1>Hello {name}</h1>
            <h4>{children}</h4>
        </>
    )
}

export default Greetings