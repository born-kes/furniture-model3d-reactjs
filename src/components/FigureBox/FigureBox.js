import React from "react";
import "./FigureBox.css";

const FigureBox = ({className}) => {
    const _ClassName = ["figureBox", className].join(" ");

    return (
            <div className={_ClassName}>
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
