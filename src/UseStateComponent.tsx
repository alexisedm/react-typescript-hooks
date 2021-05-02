import { useState } from 'react'

const UseStateComponent = () => {
    const [array, arraySet] = useState<number[]>([]);
    const [name, nameSet] = useState<string  | null>(null)

    return (
        <div>
            <div>
                <button onClick={() => arraySet([...array, array.length + 1])}>
                    Add to array
                </button>
                {JSON.stringify(array)}
            </div>

            <div>
                <button onClick={() => nameSet('Jorge')}>
                    Set name
                </button>
                {JSON.stringify(name)}
            </div>

        </div>
    )
}

export default UseStateComponent
