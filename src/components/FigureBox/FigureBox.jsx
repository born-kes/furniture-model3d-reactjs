import React from "react";
import "./FigureBox.css";

const FigureBox = ({className, figure: {size, width, height}}) => {
    const _ClassName = ["figureBox", className].join(" ");
    const dimensions = {
        "--figure--size": `var(${size})`,
        "--figure--width": `var(${width})`,
        "--figure--height": `var(${height})`
    }
    console.log(dimensions)
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
