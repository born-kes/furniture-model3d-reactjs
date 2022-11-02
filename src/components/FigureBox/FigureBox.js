import React from "react";
import "./FigureBox.css";

const FigureBox = ({className, style}) => {
    const _ClassName = ["figureBox", className].join(" ");
    console.log(style)
    const dimensions = {
    "--figure--x": `${style.x}px`,
    "--figure--y": `${style.y}px`,
    "--figure--z": `${style.z}px`,
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
