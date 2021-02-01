import React from "react";
import './FigureBox.css';

const FigureBox = ({className}) => {
    const _ClassName = ['FigureBox', className].join(' ');

    return (
        <div className={_ClassName} >
            <figure className={'up'} />
            <figure className={'down'} />
            <figure className={'top'} />
            <figure className={'bottom'} />
            <figure className={'left'} />
            <figure className={'right'} />
        </div>
    );
}

export default FigureBox;