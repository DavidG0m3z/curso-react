import { useState } from 'react'
import type { Props } from './properties'


import './ItemCounter.css'

export const ItemCounter = ({ name, cuantity = 1 }: Props) => {

    const [count, setCount] = useState(cuantity);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count === 1) return;

        setCount(count - 1)
    }

    return (
        <section className="item-row"
        // style={{
        // display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10
        // }}
        >
            <span className='item-text'
                style={{
                    // width: 150,
                    color: count === 1 ? 'red' : 'blue',
                }}
            >{name}</span>
            <button onClick={handleSubtract} >-1</button>
            <span>{count}</span>
            <button onClick={handleAdd} >+1</button>

        </section>
    )
}
