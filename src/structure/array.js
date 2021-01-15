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

    const [troll, setTroll] = useState("Selection Sort")

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
            width: `${Math.floor(document.getElementById('test').offsetWidth) / (length * 3)     }px` }} key={index}>&nbsp;</p>
            // width: `${((document.getElementById('test').offsetWidth/length)/1.5)}px` }} key={index}>&nbsp;</p>
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

    const handleBubble = async () => {
        setStopped(true)
        await bubbleSort(array, parseInt(speed)*4 +1)
        setStopped(false)
    }
    
    const handleStop = () => {
        window.location.reload(stopped)
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
                    <p style={{margin: "10px"}}><Label for="range">Select Delay (Less is Faster): {Math.ceil(speed)}ms</Label></p>
                    <Input disabled={stopped} style={{width: "40%"}} type="range" name="speed" id="speed" onChange={handleSpeed}/>
                </FormGroup>
                {stopped? <a className="cta" onClick={handleStop}><button>Stop</button></a> : <a className="cta" onClick={handleBubble}><button>Bubble Sort</button></a>}
                {/* <a className="cta" onClick={() => selectionSort(array, parseInt(speed)+1, stopped)}><button >Selection Sort</button></a> */}
                {!stopped? <a className="cta" onClick={() => setTroll("malk zrban")}><button disabled={stopped}>{troll}</button></a> : null}
            </div>

            <div id="test" style={appStyleArray}>
                {shape}
            </div>
            <br></br>
            <br></br>
            <br></br>

        </>
        
    );
}

export default Array;
