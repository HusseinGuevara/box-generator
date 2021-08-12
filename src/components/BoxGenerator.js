import React, {useState} from "react";
import Display from './Display';
const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [dimentions, setDimentions] = useState("");
    const [boxes, setBoxes] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { 
            color: color,
            dimentions: dimentions,

        };
        console.log("My new box is", newBox);
        const copyBoxes = [...boxes];    
        copyBoxes.push(newBox);
        setBoxes(copyBoxes);
    }

    
    
    
    return(
        <div>
            
            Create A Box!    
            
            <form onSubmit = { handleSubmit }>
                <label htmlFor="color">Color: </label>
                <input id="input" onChange={ (e) => setColor(e.target.value) } type="text" name="color" />
                
                <label htmlFor="dimentions">Dimentions: </label>
                <input id="input" onChange={ (e) => setDimentions(e.target.value) } type="text" name="dimentions" />
                <button  type="submit" value={"Box Dimentions"}>Create</button>
            </form>       
            {/* <p>color:{JSON.stringify(color)}</p>
            <p>dimentions:{JSON.stringify(dimentions)}</p>
            <p>boxesArray:{JSON.stringify(boxes)}</p> */}
            <hr/>
        <Display boxes = {boxes}/>
        </div>
            

        
        
    );
};

export default BoxGenerator;