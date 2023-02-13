import {useEffect, useState} from "react";

export default {
    title: 'First Example with UseEffect',
}

export const FirstExample  = () => {
    const[fakeCount, setFakeCount] = useState(1)
    const[count, setCount] = useState(1)


    useEffect(() => {
        console.log('I call on any event')
    })

    useEffect(() => {
        console.log('I call once (when componentDidMount')
    }, [])


    useEffect(() => {
        console.log('I call when fakeCount changes ')
    }, [fakeCount])

    useEffect(() => {
        console.log('I call when Count changes ')
    }, [count])

    return(
        <div>
            <p>{fakeCount}</p>
            <p>{count}</p>
            <button onClick={() => setFakeCount(fakeCount + 1)}>add Fake Count</button>
            <button onClick={() => setCount(count + 1)}>add Count</button>
        </div>
    )
}



