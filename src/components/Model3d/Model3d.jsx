import React, {useState} from "react";
import FigureBox from "../FigureBox/FigureBox";
import "./Model3d.css";

const Model3d = () => {
    const [furniture] = useState({
        width: 600,
        height: 1000,
        size: 300,
    });
    const [element] = useState([
        {id: 1, className: 'sidewall right', figure: {width: furniture.size, height: furniture.height, size: 10}},
        {id: 2, className: 'capture top', figure: {width: furniture.width, height: furniture.size, size: 10}},
        {id: 3, className: 'capture bottom', figure: {width: furniture.width, height: furniture.size, size: 10}},
        {id: 4, className: 'shelves', figure: {width: furniture.width - 10, height: furniture.size - 10, size: 10}},
        {id: 5, className: "sidewall left", figure: {width: furniture.size, height: furniture.height, size: 10}},
        // {id: 6, className: 'door', figure: {width: furniture.width - 10, height: furniture.height - 10, size: 10}},
    ]);
    const model3d = {
        // transform: `rotateX(${dimensions.dagx}) rotateY(${dimensions.dagy}) `,
        transition: "all 1s ease-in-out",
        "--furniture--width": `${furniture.width}px`,
        "--furniture--height": `${furniture.height}px`,
        "--furniture--size": `${furniture.size}px`,
    };

    return (
        <div className="model3d" title="scene3d" style={model3d}>
            <div className={"model3d-content furniture"} id="scene3d" >
                {element.map(({id, className = '', figure = {}}) => (
                    <FigureBox key={id} className={className} figure={figure}/>
                ))}
            </div>
        </div>
    );
};

export default Model3d;
