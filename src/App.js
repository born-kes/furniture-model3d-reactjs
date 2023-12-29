import {DataProvider} from "./Data/Context";
import Model3d from "./components/Model3d/Model3d";
import {ModelEditor} from "./components/ModelEditor/ModelEditor";

function App() {
    return (
        <DataProvider>
            <Model3d/>
            <ModelEditor/>
        </DataProvider>
    );
}

export default App;
