
import Home from "./route/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Detail from "./route/Detail";



function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/movie/:id" element={<Detail/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default App;
