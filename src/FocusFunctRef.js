import React,{useState,useEffect,useRef} from 'react';

function FocusFunctRef(props) {
    const [timer,setTimer] = useState(0);
    const intervalRef = useRef();
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return() =>{
            clearInterval(intervalRef.current);
        }
        // inputRef.current.focus();
    },[])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick = {()=>clearInterval(intervalRef.current)}>Clear Hook</button>
            {/* <input ref = {inputRef} type="text"/> */}
        </div>
    );
}

export default FocusFunctRef;