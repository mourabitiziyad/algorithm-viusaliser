import { useEffect, useState } from 'react';
import { 
    FormGroup,
    Label,
    Input
 } from 'reactstrap';

const Array = () => {

    const [length, setLength] = useState(0)
    const [array, setArray] = useState([])

    const appStyleArray = {
        textAlign: 'center',
        marginTop: '10px',
        // display: 'block'
      }
    
    const arraybar = {
        backgroundColor: 'yellow',
        display: 'inline',
        margin: '0 1px',
        border: '1px solid'
    }
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }
    
    const shape = array.map((value, index) => (
        <>
        <div style={arraybar} key={index} style={{height: `${value*2}px`, width: '20px' }}>{value}</div>
        </>
    ))
    
    useEffect(() => {
        for (let i=0; i < length/4; i++ ) {
            array.push(randomNumber(1, length/2))
        }
        console.log(length)
    }, [length, array])

    const handleSlider = (event) => {
        if(event.target.value !== length) {
            // setArray([])
            setLength(event.target.value)
        }
    }
    return (
        <>
        <div style={appStyleArray}>
            <FormGroup>
                <p style={{margin: "10px"}}><Label for="range">Select Array Length: {Math.ceil(length/4)}</Label></p>
                <Input style={{width: "40%"}} type="range" name="range" id="range" defaultValue={0} onChange={handleSlider}/>
            </FormGroup>
        </div>
        <div>
            {shape}
        </div>
        
        </>
        
    );
}

export default Array;
