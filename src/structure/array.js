import { useEffect, useState } from 'react';
import { 
    FormGroup,
    Label,
    Input
 } from 'reactstrap';
import { bubbleSort } from '../algorithms/sorting/bubbleSort';
import { selectionSort } from '../algorithms/sorting/selectionSort';

const Array = () => {

    
    const [length, setLength] = useState(50)
    const [speed, setSpeed] = useState(50)
    const [array, setArray] = useState([])
    const [arr, setArr] = useState([])
    const [stopped, setStopped] = useState(false)

    const appStyleArray = {
        textAlign: 'center',
        marginTop: '10px',
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }
    
    const shape = array.map((value, index) => (
        <p  id={index} style={{
            display: 'inline-block', 
            backgroundColor: 'rgba(0,136,169, 1)',
            margin: '1px',
            padding: '20px 1px',
            boxSizing: 'border-box',
            height: `${value*1.3}vh`,
            width: `${((document.getElementById('test').offsetWidth/length)/1.5)}px` }} key={index}>&nbsp;</p>
    ))

    // For sizing, play with width and padding and measurement units.
    
    useEffect(() => {
        setArr([])
        for (let i=0; i < length; i++ ) {
            arr.push(randomNumber(1, (length)))
        }
        setArray(arr)
    }, [length])

    const handleSlider = (event) => {
        event.preventDefault()
        setLength(event.target.value)
    }
    
    const handleSpeed = (event) => {
        event.preventDefault()
        setSpeed(event.target.value)
    }

    const handleChange = () => {
        for(let i=0; i< array.length; i++){
            setTimeout(() => {
                const bar = document.getElementById(i)
                bar.style.backgroundColor = 'white'
            }, i * 80);
        }
    }

    const handleBubble = () => {
        setStopped(!stopped)
        bubbleSort(array, parseInt(speed)+1)
        setStopped(!stopped)
    }

    return (
        <>
            <div style={appStyleArray}>
                <FormGroup>
                    <p style={{margin: "10px"}}><Label for="range">Select Array Length: {Math.ceil(length)}</Label></p>
                    <Input disabled={stopped} style={{width: "40%"}} type="range" name="range" id="range" onChange={handleSlider}/>
                </FormGroup>
                <FormGroup>
                    <p style={{margin: "10px"}}><Label for="range">Select Speed: {Math.ceil(speed)}</Label></p>
                    <Input disabled={stopped} style={{width: "40%"}} type="range" name="speed" id="speed" onChange={handleSpeed}/>
                </FormGroup>
                <a className="cta" onClick={handleBubble}><button disabled={stopped}>Bubble Sort</button></a>
                {/* <a className="cta" onClick={() => selectionSort(array, parseInt(speed)+1, stopped)}><button >Selection Sort</button></a> */}
                <a className="cta" onClick={handleChange}><button disabled={stopped}>Selection Sort</button></a>
            </div>

            <div id="test" style={appStyleArray}>
                {shape}
            </div>
        </>
        
    );
}

export default Array;
