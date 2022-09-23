import React from 'react';
import { useState } from 'react';
import './Counter.css'
const Counter = () => {
    const [steps, setSteps] = useState(0);
    let previousStep = 0;
    const countSteps = () => {
        if (steps < 100 && previousStep <= steps) {
            const newSteps = steps + 10;
            setSteps(newSteps);
            console.log(steps)
            previousStep = steps;
        }
    }

    return (
        <div>
            <h2>Batary Charge:{steps}%</h2>
            <div className='Button'>
                <button onClick={countSteps}>Increase</button>

            </div>
        </div>
    );
};

export default Counter;