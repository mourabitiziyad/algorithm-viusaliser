import { useEffect, useState } from 'react';
import { 
    FormGroup,
    Label,
    Input
 } from 'reactstrap';
import { bubbleSort } from '../algorithms/sorting/bubbleSort';
import { selectionSort } from '../algorithms/sorting/selectionSort';

const Array = () => {
    const [selectionSortAnimation] = useState([])
    const [bubbleSortAnimation] = useState([])
    const [length, setLength] = useState(0)
    const [array, setArray] = useState([])
    const [arr, setArr] = useState([])

    const appStyleArray = {
        textAlign: 'center',
        marginTop: '10px',
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }
    
    const shape = array.map((value, index) => (
        <p  style={{
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
    return (
        <>
        <div style={appStyleArray}>
            <FormGroup>
                <p style={{margin: "10px"}}><Label for="range">Select Array Length: {Math.ceil(length)}</Label></p>
                <Input style={{width: "40%"}} type="range" name="range" id="range" onChange={handleSlider}/>
            </FormGroup>
            <a className="cta" onClick={() => bubbleSort(array, {bubbleSortAnimation})}><button>Bubble Sort</button></a>
            <a className="cta" onClick={() => selectionSort(array, {selectionSortAnimation})}><button >Selection Sort</button></a>
        </div>
        <div id="test" style={appStyleArray}>
            {shape}
            {/* {console.log(((document.getElementById('test').offsetWidth/length)/4)-1)} */}
        </div>
        </>
        
    );
}

export default Array;
