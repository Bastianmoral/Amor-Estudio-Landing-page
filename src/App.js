import * as React from "react";
import Home from './Views/Home';
import Contact from './Views/Contact';
import { Routes, Route} from "react-router-dom";

const App = () =>{
    return(
        <div className="App">
            <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='Contact' element={<Contact/>} />
            </Routes>
        </div>
    );
};

export default App;