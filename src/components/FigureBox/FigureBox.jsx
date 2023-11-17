import React from "react";
import "./FigureBox.css";

const FigureBox = ({className, figure: {size, width, height}}) => {
    const _ClassName = ["figureBox", className].join(" ");
    const dimensions = {
        "--figure--size": `${size | 0}px`,
        "--figure--width": `${width | 0}px`,
        "--figure--height": `${height | 0}px`,
    }
    return (
        <div className={_ClassName} style={dimensions}>
            <figure className={"front"}/>
            <figure className={"back"}/>
            <figure className={"top"}/>
            <figure className={"bottom"}/>
            <figure className={"left"}/>
            <figure className={"right"}/>
        </div>
    );
};

export default FigureBox;
