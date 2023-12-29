import {useContext} from "react";
import {DataContext} from "../../Data/Context";

export const ModelEditor = () => {
//furniture:{width:number, height:number, depth:number}
    const [{furniture}, setFurniture] = useContext(DataContext);
    return (
        <div style={{
            position: "absolute",
            top: "0",
            left: "-70px",
        }}>
            <form style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                zIndex: "100",
                position: "relative",
                margin: "1em",
            }
            }>
                    <label>
                        &nbsp;Width:&nbsp;
                        <input type="number" value={furniture.width}
                               onChange={(e) => setFurniture({furniture: {...furniture, width: e.target.value}})}/>
                    </label>
                    <label>
                        Height:&nbsp;
                        <input type="number" value={furniture.height}
                               onChange={(e) => setFurniture({furniture: {...furniture, height: e.target.value}})}/>
                    </label>

                    <label>
                        &nbsp;Depth:&nbsp;
                        <input type="number" value={furniture.depth}
                               onChange={(e) => setFurniture({furniture: {...furniture, depth: e.target.value}})}/>
                    </label>
            </form>
        </div>
)
}