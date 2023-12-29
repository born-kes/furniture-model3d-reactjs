import React, {useContext} from "react";
import {DataContext} from "../../Data/Context";
import FigureBox from "../FigureBox/FigureBox";
import "./Model3d.css";

const Model3d = () => {

    const [{furniture, elements}] = useContext(DataContext);
    const model3d = {
        // transform: `rotateX(${dimensions.dagx}) rotateY(${dimensions.dagy}) `,
        transition: "all 1s ease-in-out",
        "--furniture--width": `${furniture.width}px`,
        "--furniture--height": `${furniture.height}px`,
        "--furniture--size": `${furniture.depth}px`,
        "--furniture--depth": `10px`,
    };

    return (
        <div className="model3d" title="scene3d" style={model3d}>
            <div className={"model3d-content furniture"} id="scene3d" >
                {console.log('el',furniture)}
                {elements.map(({id, className = '', figure = {}}) => (
                    <FigureBox key={id} className={className} figure={figure}/>
                ))}
            </div>
        </div>
    );
};

export default Model3d;
