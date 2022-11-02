import React, {useState} from "react";
import FigureBox from "../FigureBox/FigureBox";
import "./Model3d.css";

const Model3d = () => {
  const [dimensions] = useState({
    x: "700",
    y: "400",
    z: "100",
    dagx: "-2deg",
    dagy: "-2deg",
  });
    const [element] = useState([
        {id: 1, className: "sidewall left", style: {x: dimensions.x, y: dimensions.y, z: dimensions.z }},
        // { id:2, className: 'sidewall right' },
        // { id:3, className: 'capture top' },
        // { id:4, className: 'capture bottom' },
        // { id:5, className: 'shelves' }
    ]);
    const model3d = {
        // transform: `rotateX(${dimensions.dagx}) rotateY(${dimensions.dagy}) `,
        transition: "all 1s ease-in-out",
        "--furniture--x": `${dimensions.x}px`,
        "--furniture--y": `${dimensions.y}px`,
        "--furniture--z": `${dimensions.z}px`,
    };

    return (
        <div className="model3d" title="scene3d" style={model3d}>
            <div className={"model3d-content x furniture"}>
                {element.map(({id, className, style}) => (
                    <FigureBox key={id} className={className} style={style}/>
                ))}
            </div>
        </div>
    );
};

export default Model3d;
