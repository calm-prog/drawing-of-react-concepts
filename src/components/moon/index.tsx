import './moon.css'

export const Moon = ({rotation}: {rotation: number}): JSX.Element => (
    <div className="moon" style={{transform: "rotate(-" + rotation + "deg)"}}>
        <div className="moonshine"/>
    </div>
)