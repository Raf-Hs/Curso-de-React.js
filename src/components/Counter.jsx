import {useState} from "react";

const Counter = () => {
    const [count,setCount] = useState(0)

    return (
        <div>
            <p> El contador esta en: {count}</p>
        </div>
    )
}

export default Counter;
