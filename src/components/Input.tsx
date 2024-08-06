import { useState } from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const [myValue, setMyValue] = useState('');
    const handleMyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyValue(event.target.value);
        props.handleChange(event);
    }
    return <input type="text" value={myValue} onChange={handleMyValue}/>
    // return <input type="text" value={props.value} onChange={props.handleChange}/>
}