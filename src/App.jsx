import Body from "./components/Body.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";

function App() {

    return (
        <Provider store={appStore}>
           <Body/>
        </Provider>
    )
}

export default App
