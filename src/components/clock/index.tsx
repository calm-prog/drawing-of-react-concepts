import './clock.css'

export const Clock = ():JSX.Element => (
    <div className="clock-box">
        <div className="screen-container">
            <div className="screen">
                <input type="number"/>
                <span>:00</span>
            </div>
        </div>
    </div>
)