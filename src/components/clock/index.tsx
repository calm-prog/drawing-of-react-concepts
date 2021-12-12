import './clock.css'
import React, { FormEvent, useState } from 'react'

type Props = {
    setTime: React.Dispatch<React.SetStateAction<number>>
}

export const Clock = ({setTime}: Props):JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("12")
    const [editMode, setEditMode] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTime(parseInt(inputValue))
        setEditMode(false)
    }

    return (
        <div className="clock-box">
            <div className="screen-container">
                <form className="screen" onSubmit={(e) => handleSubmit(e)}>
                    {editMode 
                        ?   <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        :   <span className="hour" onClick={() => setEditMode(true)}>{inputValue}</span>
                    }
                    <span>:00</span>
                </form>
            </div>
        </div>
    )
}