import {DataProvider} from "./Data/Context";
import Model3d from "./components/Model3d/Model3d";

function App() {
    return (
        <DataProvider>
            <Model3d/>
        </DataProvider>
    );
}

export default App;
