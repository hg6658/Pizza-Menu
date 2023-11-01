import './cpp.css';
import { useState } from 'react';
const messages = [
    "Learn React",
    "Apply For Jobs",
    "Invest your Income"
];

function Cpp(){
    const [step, setStep] = useState(1);
    const decreaseStep = ()=>{
        if(step<=1){
            return ;
        }
        setStep(prev => prev-1);
    }
    const increaseStep = ()=>{
        if(step>=3){
            return ;
        }

        setStep(prev => prev+1);
    }
    return <div className="steps">
        <div className="numbers">
        <div className={`number ${step>=1 ? "active" : ""}`}>1</div>
        <div className={`number ${step>=2 ? "active" : ""}`}>2</div>
        <div className={`number ${step>=3 ? "active" : ""}`}>3</div>
        </div>
        <div className="message">Step {step}: {messages[step-1]} </div>
        <div className="buttons">
            <button onClick={decreaseStep}>prev</button>
            <button onClick={increaseStep}>next</button>
        </div>
    </div>
}

export default Cpp;