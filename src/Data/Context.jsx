import {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const furniture = {
        width: 500,
        height: 516,
        depth: 300,
    };

    const elements = [
        {id: 1, className: 'sidewall right', figure: {width: "--furniture--size", height: "--furniture--height", size: "--furniture--depth"}},
        {id: 2, className: 'capture top', figure: {width: "--furniture--width", height: "--furniture--size", size: "--furniture--depth"}},
        {id: 3, className: 'capture bottom', figure: {width: "--furniture--width", height: "--furniture--size", size: "--furniture--depth"}},
        {id: 4, className: 'shelves', figure: {width: "--furniture--width", height: "--furniture--size", size: "--furniture--depth"}},
        {id: 5, className: "sidewall left", figure: {width: "--furniture--size", height: "--furniture--height", size: "--furniture--depth"}},
        // {id: 6, className: 'door', figure: {width: "--furniture--width" - 10, height: "--furniture--height", size: "--furniture--depth"}},
    ];

    const [model, setFurniture] = useState({furniture: furniture});
    const [el] = useState({elements: elements});

    return (
        <DataContext.Provider value={[{...model, ...el}, setFurniture]}>
            {children}
        </DataContext.Provider>
    );
}