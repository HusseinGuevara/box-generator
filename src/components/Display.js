import React from "react"


const Display = (props) => {
    console.log(props.boxes)
    return (
        <div>

        {
            props.boxes.map((box,idx)=>{
                return <div style={{ backgroundColor:box.color, width:box.dimentions+"px", height:box.dimentions+"px",display:"inline-block", margin:"10px", border:"1px solid black"}} key={ idx }></div>
            })
        }
        </div>
    );
    
};

export default Display;