import { useState } from 'react';
import { 
    FormGroup,
    Label,
    Input
 } from 'reactstrap';

const Array = () => {

    const [length, setLength] = useState(0)

    const appStyleArray = {
        textAlign: 'center',
        marginTop: '10px',
        display: 'block'
      }
    

    const handleSlider = (event) => {
        setLength(event.target.value)
        console.log(event.target.value)
    }
    return (
        <>
        <div style={appStyleArray}>
            <FormGroup>
                <p style={{margin: "10px"}}><Label for="range">Select Array Length: {length}</Label></p>
                <Input style={{width: "40%"}} type="range" name="range" id="range" defaultValue={0} onChange={handleSlider}/>
            </FormGroup>
        </div>
        
        </>
        
    );
}

export default Array;
