import {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const furniture = {
        width: 500,
        height: 516,
        size: 300,
    };
    const elements = [
        {id: 1, className: 'sidewall right', figure: {width: furniture.size, height: furniture.height, size: 10}},
        {id: 2, className: 'capture top', figure: {width: furniture.width, height: furniture.size, size: 10}},
        {id: 3, className: 'capture bottom', figure: {width: furniture.width, height: furniture.size, size: 10}},
        {id: 4, className: 'shelves', figure: {width: furniture.width, height: furniture.size - 10, size: 10}},
        {id: 5, className: "sidewall left", figure: {width: furniture.size, height: furniture.height, size: 10}},
        // {id: 6, className: 'door', figure: {width: furniture.width - 10, height: furniture.height - 10, size: 10}},
    ];
    const model3d = {
        // transform: `rotateX(${dimensions.dagx}) rotateY(${dimensions.dagy}) `,
        transition: "all 1s ease-in-out",
        "--furniture--width": `${furniture.width}px`,
        "--furniture--height": `${furniture.height}px`,
        "--furniture--size": `${furniture.size}px`,
    };

    const [models, setData] = useState({furniture: furniture, elements: elements, model3d: model3d});

    return (
        <DataContext.Provider value={[models, setData]}>
            {children}
        </DataContext.Provider>
    );
}