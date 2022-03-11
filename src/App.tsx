import React from 'react';
import {Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/SignIn";
import {Index} from "./pages/Home";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </div>
    );
}

export default App;
