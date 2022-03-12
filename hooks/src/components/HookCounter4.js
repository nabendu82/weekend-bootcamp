import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }]);
    }

    console.log(items);

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>{items && items.length && items.map(it => <li key={it.id}>{it.value}</li>)}</ul>
        </>
    )
}

export default HookCounter4